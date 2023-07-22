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
        <p>THE FIRST AI-POWERED WEB DEVELOPMENT AGENCY</p>
        <br />
        <h1>
        Get <b> the perfect website </b> <br />
        for your business today.
        </h1>
        </div>

        <div className="buttons">
        <Boton1 text="Become Prime" link="https://calendly.com/prymoagencia/30min" />
        <Boton2 text="See More" link="#about"/>
        </div>

      </section>
    </div>
  )
}

export default Hero