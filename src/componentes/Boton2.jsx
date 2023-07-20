import { NavLink } from "react-router-dom"
const Boton2 = ({text, link}) => {
  return (
      <div className="btn secondary">
        <NavLink to={link} >
          <svg width="25" height="25" viewBox="0 0 25 25" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path d="M6.37012 6.00391L19.3701 19.0039M19.3701 19.0039V6.52391M19.3701 19.0039H6.89012" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          {text}</NavLink>
      </div>
  )
}

export default Boton2