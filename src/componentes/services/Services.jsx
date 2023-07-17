import './services.css'
import ServiceCard from './ServiceCard'
import icon1 from '../../assets/icons/service.svg';
import Titulo from '../Titulo'

const Services = () => {
  return (
    <section className="services">
      <div className="servicesContent">
      <Titulo pretitle="CHOOSE WHAT YOU NEED" title="Our Services"/>

      <div className="serviceCardsRow">
      <ServiceCard icon={icon1} serviceName="Analisis" serviceText="Nos encargamos de maquetar,
      diseñar, y organizar tus redes sociales. Desde publicaciones, historias, hasta miniaturas y logos."/>
      <ServiceCard icon={icon1} serviceName="Analisis" serviceText="Nos encargamos de maquetar,
        diseñar, y organizar tus redes sociales. Desde publicaciones, historias, hasta miniaturas y logos."/>
      <ServiceCard icon={icon1} serviceName="Analisis" serviceText="Nos encargamos de maquetar,
        diseñar, y organizar tus redes sociales. Desde publicaciones, historias, hasta miniaturas y logos."/>
      </div>
      <div className="serviceCardsRow">
        <ServiceCard icon={icon1} serviceName="Analisis" serviceText="Nos encargamos de maquetar,
          diseñar, y organizar tus redes sociales. Desde publicaciones, historias, hasta miniaturas y logos."/>
        <ServiceCard icon={icon1} serviceName="Analisis" serviceText="Nos encargamos de maquetar,
          diseñar, y organizar tus redes sociales. Desde publicaciones, historias, hasta miniaturas y logos."/>
          </div>
      </div>

    </section>
  )
}

export default Services