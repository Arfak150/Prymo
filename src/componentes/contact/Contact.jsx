import './contact.css'
import Titulo from '../Titulo'
import Face from '../../assets/icons/face.svg'

const Contact = () => {
  return (
    <section className="contact" >
      <div className="contactContainer">
        <Titulo pretitle="WE ARE HERE FOR YOU" title="Send us a message!"/>
        <div className="contactContent">
            <div className="contactContentLeft">
              <form className='formulario' action="POST">
                <input type="text" name="name" required placeholder='Name'/>
                <br />
                <input type="email" name="email" required placeholder='Email'/>
                <br />
                <select name="interest" required id="">
                  <option value="" disabled selected >What are you interested in?</option>
                  <option value="short">Need help with a one-off project</option>
                  <option value="middle">Looking for a long term partnership</option>
                  <option value="long">Want to hire me full-time</option>
                </select>
                <br />
                <select name="interest" required id="">
                  <option value="" disabled selected >What’s your budget?</option>
                  <option value="short">$500 to $1,000</option>
                  <option value="middle">$1,000 to $5,000</option>
                  <option value="middle">More than $5,000</option>
                </select>
                <br />
                <textarea placeholder='Message' name="message" id="" cols="10" rows="5" required ></textarea>
              </form>
              <input type="submit" value="Send Message" className='btn primary'/>
            </div>
          <div className="contactContentRight">
          <img src={Face} alt="Wink Icon" />
          <p>Tired of Forms? Drop us a line at</p>
          <a href="#"> <strong> <b>contact@prymoagency.com</b></strong> </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact