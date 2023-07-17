import './call.css'
import Boton1 from '../Boton1'
import click from '../../assets/icons/click.svg'

const Call = () => {
  return (
    <section className='callSection' id='call'>
      <div className="callContent">
        <div className="callContentText">
        <small>LET'S TALK</small>
        <b>
        <strong>Schedule a <br />
        FREE ZOOM <br />
        CALL with us</strong>
        </b>
        </div>

        <div className="click">
          <a href="https://calendly.com/prymoagencia/30min" target='_blank' rel="noreferrer">
            <img src={click} alt="Click Here to get a Free Zoom Call" />
          </a>
        </div>

      </div>
    </section>
  )
}

export default Call