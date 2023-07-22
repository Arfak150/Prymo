import './projectsgeneral.css'

const ProjectsTitle = ({title, tag}) => {
  return (
    <div className='projectsTitle'>
      <h2>{title}</h2>
      <b>{tag}</b>
    </div>
  )
}

export default ProjectsTitle