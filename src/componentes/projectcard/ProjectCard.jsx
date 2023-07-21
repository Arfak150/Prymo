import "../projects/projects.css"
import Star from '../../assets/icons/star.svg'

const ProjectCard = ({imgProject, projectName, text}) => {





  return (
    <div className="projectCard">
      <img src={imgProject} alt='icon' />

      <div className="projectCardBottom">
      <div className="projectName">
      <i><img src={Star} alt="" /></i>
      <h4>{projectName}</h4>
      </div>
        <p>
          {text}
        </p>
      <a href=""><b>Ver más</b></a>
      </div>

    </div>
  )
}

export default ProjectCard