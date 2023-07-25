import React, { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    mensaje: '',
    interes: '',
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    const [formData, setFormData] = useState({
      nombre: '',
      email: '',
      mensaje: '',
      interes: '',
    });

    // Aquí puedes realizar alguna acción con los datos del formulario, como enviarlos a un servidor.
    var xhr = new XMLHttpRequest();

    xhr.addEventlistener('load', ()=>{

      e.preventDefault();
      console.log(xhr.responseText);
    });

     xhr.open('GET', 'http://api.ruvictor.com/sendemail/index.php?sendto=' + formData.email +
    '&name=' + formData.nombre +
    '&message=' + formData.mensaje);

    xhr.send();

    console.log(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="nombre">

        <input
          type="text"
          placeholder='Nombre'
          id="nombre"
          name="nombre"
          value={formData.nombre}
          onChange={handleInputChange}
          required
        />
        </label>
      </div>
      <div>
        <label htmlFor="email">

        <input
          type="email"
          placeholder='Email'
          id="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          required
        />
        </label>

      </div>
      <div>
        <label htmlFor="interes">

        <select
          id="interes"
          name="interes"
          value={formData.interes}
          onChange={handleInputChange}
          required
        >
          <option value="">¿En que estas interesado?</option>
          <option value="opcion1">Chat Bots Automatizados</option>
          <option value="opcion2">Sistemas Personalizados</option>
          <option value="opcion3">Optimizar los procesos y sistemas de mi negocio</option>
        </select>
        </label>

      </div>
      <div>
        <label htmlFor="mensaje">

        <textarea
          type="text"
          placeholder='Cuentanos un poco más!'
          id="mensaje"
          name="mensaje"
          value={formData.mensaje}
          onChange={handleInputChange}
          required
        />
        </label>

      </div>
      <button className='btn primary' type="submit">Enviar</button>
    </form>
  );
};

export default ContactForm;
