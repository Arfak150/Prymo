import './contact.css'
import Face from '../../assets/icons/face.svg'
import ContactForm from '../form/ContactForm'

const Contact = () => {
  return (
    <section id='contact' className="contact" >
      <div className="contactContainer">
        <img src={Face} alt="" />
        <div className='formTitle'>
        <h2>Envianos un Mensaje!</h2>
        <p>Si tardamos más de 2 horas en contestarte te regalamos un servicio!</p>
        </div>
        <div className="contactContent">
            <div className="contactContentLeft">
              <ContactForm/>
            </div>
        </div>
      </div>
    </section>
  )
}

export default Contact