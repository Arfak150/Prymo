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
          <Pitem icon={icon1} name="ANALYZE" text="We delve into your entire brand, your vision, and your unique positioning in the market. Understanding your clients and staying ahead of your competition, we expertly establish priorities and set ambitious goals, all to craft the perfect website tailored exclusively for you."/>
          <Pitem icon={icon2} name="DESIGN" text="With all the information about your business and  the most innovative AI systems our experts design your ideal website, which is fully responsive and features a visually appealing interface specifically designed to enhance the user experience."/>
          <Pitem icon={icon3} name="DEVELOP" text="Your website is developed using the latest technologies to ensure that it stands at the forefront of modernity and innovation  and meets all the necessary requirements to achieve your business objectives. "/>
        </div>

      </section>
    </div>
  )
}

export default About