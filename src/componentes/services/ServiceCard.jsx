import './services.css'
import '../Boton2'
import Boton2 from '../Boton2'
import React, { useEffect } from 'react';

const ServiceCard = ({ icon,serviceName, serviceText }) => {

  useEffect(() => {

    ScrollReveal().reveal('.serviceCard', {delay: 150, duration: 800, distance:'-100px', origin:'top', interval: 200, scale: 1.1});



  }, []);

  return (
    <div className='serviceCard'>
      <div className='serviceCardTitle'>
      <i><img src={icon} alt="" /></i>
      <h5>{serviceName}</h5>
      </div>
      <p>{serviceText}</p>
    </div>
  )
}

export default ServiceCard