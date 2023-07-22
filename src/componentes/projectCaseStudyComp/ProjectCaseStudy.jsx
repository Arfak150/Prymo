import '../projectsComp/projectsgeneral.css'
import ProjectsTitle from '../projectsComp/ProjectsTitle'
import ProjectInfo from '../projectsComp/ProjectInfo'
import Pitem from '../processItem/Pitem'
import icon1 from '../../assets/icons/p1.svg';
import icon2 from '../../assets/icons/p2.svg';
import icon3 from '../../assets/icons/p3.svg';
import Footer from '../footer/Footer'


const ProjectCaseStudy = ({title, tag, Img1, client, text, tags, botonUrl, challenge, approach, conclusion, Img2 }) => {
  return (
    <main className='projectCaseStudy'>
    <div className="projectContainer">
     <ProjectsTitle title={title} tag={tag} />
      <img className='projectImg1' src={Img1} alt="" />
      <ProjectInfo client={client}
      text={text}
      tags={tags}
      botonUrl={botonUrl}/>

      <div className='processItems'>
        <Pitem icon={icon1} name="CHALLENGE" text={challenge}/>
        <Pitem icon={icon2} name="APPROACH" text={approach}/>
        <Pitem icon={icon3} name="CONCLUSION" text={conclusion}/>
      </div>

      <img className='projectImg2' src={Img2} alt="" />
    </div>

    <Footer/>
  </main>

  )
}

export default ProjectCaseStudy