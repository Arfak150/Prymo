import './packs.css'
import Titulo from '../Titulo'
import PackCard from './packCard/PackCard'
import PackCardLight from './packCard/PackCardLight'
import icon1 from '../../assets/icons/pack1.svg';
import icon2 from '../../assets/icons/pack2.svg';
import icon3 from '../../assets/icons/pack3.svg';
import PackItem from './packCard/PackItem'
import React, { useEffect } from 'react';


const Packs = () => {

  useEffect(() => {

    ScrollReveal().reveal('.packCard', {delay: 800, duration: 2200, distance:'-150px', origin:'bottom',  });
    ScrollReveal().reveal('.light', {delay: 100, duration: 2000, distance:'-150px', origin:'bottom', scale: 1.2});
  


  }, []);




  return (
    <section className='packsSection'>
      <div className="packsContent">
         <Titulo pretitle="CHOOSE YOUR IDEAL PACK" title="Our Packs"/>
         <div className="packsRow">
          <PackCard id='asd' icon={icon1} packname="Website Design" price="$400.00" packtext="Lleva el sitio web de empresa al siguiente nivel con los ultimos estandares de diseño con Prymo"
          items={[
            <PackItem key={1} itemtext="Analisis de Marca Completo" />,
            <PackItem key={2} itemtext="Análisis de Sitio Web Actual" />,
            <PackItem key={3} itemtext="Estrategia de Marketing" />,
            <PackItem key={4} itemtext="Prototipo y Diseño de Sitio" />,
            <PackItem key={5} itemtext="Responsivo para Dispositivos" />,
          ]}
          />

          <PackCardLight icon={icon2} packname="Full Website" price="$499.00" packtext="Lleva el sitio web de empresa al siguiente nivel con los ultimos estandares de diseño con Prymo"
          items={[
            <b>
            <PackItem key={1} itemtext="Todo lo de Diseño Web" />
            </b>,
            <PackItem key={2} itemtext="Desarrollo del Sitio Web" />,
            <PackItem key={3} itemtext="SEO y Posicionamiento" />,
            <PackItem key={4} itemtext="Adaptable a Dispositivos Mobiles" />,
            <PackItem key={5} itemtext="Estrategias de Aumento de Ventas" />,
            <PackItem key={4} itemtext="Email Marketing" />,
          ]}
          />


          <PackCard id='asdd' icon={icon3} packname="Full Brand Design" price="$1,099.00" packtext="Lleva el sitio web de empresa al siguiente nivel con los ultimos estandares de diseño con Prymo"
          items={[
            <b>
            <PackItem key={1} itemtext="Todo lo de Diseño Web" />
            </b>,
            <b>
            <PackItem key={1} itemtext="Todo lo de Desarrollo Web" />
            </b>,
            <PackItem key={4} itemtext="Hosting" />,
            <PackItem key={3} itemtext="Branding Profesional" />,
            <PackItem key={2} itemtext="Diseño de Redes Sociales" />,
            <PackItem key={5} itemtext="Mantenimiento Deluxe" />,
          ]}
          />
         </div>
      </div>
    </section>
  )
}

export default Packs