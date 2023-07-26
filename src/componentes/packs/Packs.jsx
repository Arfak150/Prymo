import './packs.css'
import Titulo from '../Titulo'
import PackCard from './packCard/PackCard'
import PackCardLight from './packCard/PackCardLight'
import icon1 from '../../assets/icons/pack1.svg';
import icon2 from '../../assets/icons/pack2.svg';
import icon3 from '../../assets/icons/pack3.svg';
import React, { useEffect } from 'react';


const Packs = () => {

  useEffect(() => {

    ScrollReveal().reveal('.packCard', {delay: 800, duration: 2200, distance:'-150px', origin:'bottom',  });
    ScrollReveal().reveal('.light', {delay: 100, duration: 2000, distance:'-150px', origin:'bottom', scale: 1.2});



  }, []);




  return (
    <section id='services' className='packsSection'>
      <div className="packsContent">
         <Titulo pretitle="Soluciones impulsadas por IA" title="Nuestros servicios"/>
         <div className="packsRow">
          <PackCard id='asd' icon={icon1} packname="Desarrollo de chatbots de IA"
          packtext="Nos especializamos en implementar Chatbots personalizados, los últimos softwares de IA y procesos de automatización con tres objetivos principales en mente: mejorar la experiencia del cliente, agilizar las operaciones y permitirle superar a los competidores."
          />

          <PackCardLight icon={icon2} packname="Automatizacion de Tareas con Sistemas de IA"
          packtext="Después de la sesión de descubrimiento inicial, lo guiaremos en la identificación de oportunidades para implementar soluciones de IA y automatización específicamente adaptadas a las necesidades de su negocio, ahorrándole tiempo de manera efectiva y promoviendo el crecimiento."
          />


          <PackCard id='asdd' icon={icon3} packname="Capacitación y soporte con IA"
          packtext="Brindamos capacitación sobre cómo usar e implementar herramientas de IA y ofrecemos soporte continuo para garantizar una utilización y resultados óptimos mientras usamos nuestras soluciones de Chatbot de IA personalizadas."

          />
         </div>
      </div>
    </section>
  )
}

export default Packs