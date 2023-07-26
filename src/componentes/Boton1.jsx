const Boton1 = ({text, link}) => {
  return (
      <div className="btn primary">
        <a href={link} target="_blank" rel="noreferrer">{text}</a>
      </div>
  )
}

export default Boton1