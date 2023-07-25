import './services.css'
import ServiceCard from './ServiceCard'
import icon1 from '../../assets/icons/service.svg';
import Titulo from '../Titulo'

const Services = () => {
  return (
    <section className="services">
      <div className="servicesContent">
      <Titulo pretitle="Prymo, La Mejor Opcion" title="¿Como Mejoramos tu Negocio?"/>

      <div className="serviceCardsRow">
      <ServiceCard icon={icon1} serviceName="Aumentamos tus Ventas"
      serviceText="En Prymo, estamos dedicados a impulsar el crecimiento
      de tu negocio. Con nuestras soluciones de automatización y análisis
      de datos con IA, aumentamos tus ventas de manera inteligente y sostenible.
      Descubre cómo optimizamos tu estrategia de marketing, personalizamos el contenido para
      tu audiencia y te ayudamos a alcanzar nuevos niveles de éxito en ventas."/>
      <ServiceCard icon={icon1} serviceName="Potenciamos tu productividad"
      serviceText="La productividad es clave para el éxito empresarial. En Prymo, te ofrecemos
      soluciones innovadoras para aumentar la eficiencia de tus procesos. Con nuestra automatización
      y tecnologías de IA, simplificamos tareas complejas, eliminamos cuellos de botella y te permitimos
      enfocarte en lo que realmente importa. Potencia el rendimiento de tu equipo y alcanza tus metas con nuestro apoyo."/>

      </div>
      <div className="serviceCardsRow">
        <ServiceCard icon={icon1} serviceName="Minimizamos costos" serviceText="En Prymo, entendemos la importancia de una gestión
        financiera eficiente. Nuestras soluciones de automatización y análisis de datos te permiten identificar oportunidades para
        minimizar costos y optimizar el uso de recursos. Desde la gestión del inventario hasta la toma de decisiones estratégicas,
        trabajamos para maximizar tus márgenes y mejorar la rentabilidad de tu negocio."/>
        <ServiceCard icon={icon1} serviceName="Elevamos la eficiencia de tu equipo" serviceText="El capital humano es un activo valioso. Con nuestras herramientas de IA y análisis de datos, ayudamos a tu equipo a trabajar de manera más inteligente y efectiva. Identificamos áreas de mejora, ofrecemos formación personalizada y simplificamos flujos de trabajo para que tu equipo alcance su máximo potencial. En Prymo, creemos que un equipo eficiente es la clave para el éxito duradero."/>
          </div>
      </div>

    </section>
  )
}

export default Services