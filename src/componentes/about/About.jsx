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

          <iframe width="100%" height="600px" src="https://www.youtube.com/embed/HAPtbQjbcRw" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

        <Titulo pretitle="PRIME BUSINESS, NEED PRIME WEBSITE" title="The Process"/>

        <div className='processItems'>
          <Pitem icon={icon1} name="ANALYZE" text="We analyze your entire brand, your vision and projection, your clients, and your competition to establish priorities and goals in order to create the perfect website."/>
          <Pitem icon={icon2} name="DESIGN" text="We use the most innovative AI to design your website, which is fully responsive and features a visually appealing interface specifically designed to enhance the user experience."/>
          <Pitem icon={icon3} name="DEVELOP" text="We develope the website using the latest technologies to ensure that your site is modern and meets all the necessary requirements to achieve your business objectives."/>
        </div>

      </section>
    </div>
  )
}

export default About