import './projects.css'
import Titulo from '../Titulo'
import ProjectCard from '../projectcard/ProjectCard'
import Project1 from '../../assets/images/project1.png'
import Project2 from '../../assets/images/project2.png'
import Project3 from '../../assets/images/project3.png'
import Boton2 from '../Boton2'
import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom'

const Projects = () => {


  useEffect(() => {

    // ScrollReveal().reveal('.projectCard', {delay: 300, duration: 850, distance:'-200px', origin:'right'});
    ScrollReveal().reveal('.aboutContent .textoPrincipal p', {delay: 100, duration: 800, distance:'-120px', origin:'right'});
    ScrollReveal().reveal('.projectCard', {delay: 200, duration: 900, distance:'-200px', origin:'right', interval: 350 });


  }, []);


  return (
    <section className='projects'id='projects'>
      <div className="projectsContent">
      <Titulo pretitle="CHECK THESE PRIME WEBSITES" title="Most Recent Projects"/>
        <div className="projectsRow">
          <ProjectCard imgProject={Project1} projectName='Block House' text='A multi-space focused on innovation and technology, got a rebranding process, which required updating their website with the new brand style, so we took it to the next level by...'/>
          <ProjectCard imgProject={Project2} projectName='Apileza' text='Immerse yourself in the sweet and captivating world of artisanal honey. We elevated Apileza’s digital presence to new heights with a cutting-edge website...'/>
          <ProjectCard imgProject={Project3} projectName='Handidact' text='Behold the digital realm of Handidact, the indie video game developer startup! Our mission was to craft a mesmerizing website that captivates users and showcases their...'/>
        </div>
        <Boton2 text='See All Projects' link='/allProjects' />
        <NavLink></NavLink>


      </div>
    </section>
  )
}

export default Projects