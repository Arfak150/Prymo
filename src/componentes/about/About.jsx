import './about.css'
import TextoPrincipal from '../TextoPrincipal'
import Titulo from '../Titulo'
import Pitem from '../processItem/Pitem'
import icon1 from '../processItem/process1.svg';
import icon2 from '../processItem/process2.svg';
import icon3 from '../processItem/process3.svg';
import React, { useEffect } from 'react';

const About = () => {


  useEffect(() => {

    ScrollReveal().reveal('.aboutContent .textoPrincipal h2', {delay: 400, duration: 1000, distance:'-200px', origin:'right'});
    ScrollReveal().reveal('.aboutContent .textoPrincipal p', {delay: 100, duration: 1400, distance:'-200px', origin:'right'});
    ScrollReveal().reveal('.about .aboutContent .processItems .pItem', {delay: 150, duration: 1800, distance:'-100px', origin:'right', interval: 300 });


  }, []);


  return (
    <div className='about'id='about'>
      <section className='aboutContent'>
        <TextoPrincipal/>

        <iframe width="90%" height="720" src="https://www.youtube.com/embed/43MdhyYl2hY" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

      </section>
    </div>
  )
}

export default About