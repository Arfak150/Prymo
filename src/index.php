<?php
if($_SERVER['REQUEST_METHOD'] != 'POST' ){
    header("Location: index.html");
}

require_once '../vendor/autoload.php';
require_once 'correo.php';

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

$nombre = $_POST ['nombre'];
$email = $_POST ['email'];
$telefono = $_POST ['telefono'];
$asunto = $_POST ['asunto'];
$contacto = $_POST ['contacto'];
$contacto2 = $_POST ['contacto2'];
$contacto3 = $_POST ['contacto3'];
$mensaje = $_POST ['mensaje'];

$respuesta = [];
$bandera = true;

if($nombre == ''){
    $respuesta += ['nombre' => 'Ingres un nombre'];
    $bandera= false;
}

if($email == '' ){
    $respuesta += ['correo' => 'Ingrese un correo'];

    $bandera= false;
}

if($mensaje == '' ){
    $respuesta += ['mensaje' => 'Ingrese un mensaje'];
    $bandera= false;
}

if($bandera){


    $mail = new PHPMailer(true);
    try {
        //Server settings
      //       $mail->SMTPDebug = 2;                                       // Enable verbose debug output
        $mail->isSMTP();                                            // Set mailer to use SMTP
        $mail->Host       = 'smtp.gmail.com';  // Specify main and backup SMTP servers
        $mail->SMTPAuth   = true;                                   // Enable SMTP authentication
        $mail->Username   = 'prymo';                     // SMTP username
        $mail->Password   = 'rxijjddkjqihujay';                               // SMTP password
        $mail->SMTPSecure = 'tls';                                  // Enable TLS encryption, `ssl` also accepted
        $mail->Port       = '587';
;                                    // TCP port to connect to
        //Recipients
        $mail->setFrom("$email", 'Cliente');
        $mail->addAddress('info@blockhouse.club', 'BlockHouse');
        // Content
        $mail->Subject = "$asunto";
        $mail->isHTML(true);                                  // Set email format to HTML
        $mail->Body    = correo($nombre,$email,$asunto,$mensaje,$contacto,$contacto2,$contacto3,$telefono);
        $mail->CharSet = 'UTF-8';
        $mail->send();
        $respuesta = json_encode(['respuesta' => true]);
    } catch (Exception $e) {
        $respuesta = json_encode(['respuesta' => false]);
    }


}

if($respuesta){
    header("Location: ../confirmacion.html");
    exit;
}

?>
