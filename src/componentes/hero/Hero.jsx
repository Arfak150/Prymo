import './hero.css'
import Boton1 from '../Boton1'
import Boton2 from '../Boton2'
import Videolink from '../../assets/images/bgvideo.mp4'
import React, { useEffect } from 'react';

const Hero = () => {


  useEffect(() => {

    ScrollReveal().reveal('.hero h1', {delay: 0, duration: 2000, distance:'-50px', origin:'bottom'});
    ScrollReveal().reveal('.hero p', {delay: 100, duration: 2000, distance:'-50px', origin:'bottom'});
    ScrollReveal().reveal('.hero .buttons', {delay: 0, duration: 2000, distance:'-50px', origin:'top', reset:true});

  }, []);



  return (
    <div>
      <section className='hero'>
        <video className="hero-video" autoPlay loop muted>
          <source src={Videolink} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="heroText">
        <p>Obten un Sistema de IA Automatizado que te sea util, sino no pagas.</p>
        <br />
        <h1>
        Potenciamos su Negocio <br />
        Con <b> Soluciones IA </b>
          de Vanguardia
        </h1>
        </div>

        <div className="buttons">
        <Boton1 text="Quiero Mejorar Mi Negocio" link="https://calendly.com/prymoagencia/30min" />
        </div>

      </section>
    </div>
  )
}

export default Hero