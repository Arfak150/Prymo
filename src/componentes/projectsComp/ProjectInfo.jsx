import React from 'react'
import Boton2 from '../Boton2'

const ProjectInfo = ({client, text, tags, botonUrl}) => {
  return (
    <section className='projectInfo'>

      <div className='projectDesc'>
        <small>{client}</small>
        <p>{text}</p>
      </div>
      <div className='projectTags'>
      {tags}
      <Boton2 text='Check the Website' link={botonUrl}/>
      </div>

    </section>
  )
}

export default ProjectInfo