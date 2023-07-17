import React, { useEffect } from 'react';


const Titulo = ({pretitle, title}) => {

  useEffect(() => {

    ScrollReveal().reveal('.titulo', {delay: 100, duration: 800, distance:'-120px', origin:'right', reset:true});
  
  
  }, []);



  return (
  <div className="titulo">
    <small>{pretitle}</small>
    <h2>{title}</h2>
  </div>
  )
}

export default Titulo