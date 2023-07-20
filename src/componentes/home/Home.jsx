import React from 'react'
import './home.css'
import Nav from '../nav/Nav'
import Hero from '../hero/Hero'
import About from '../about/About'
import Projects from '../projects/Projects'
import Packs from '../packs/Packs'
import Services from '../services/Services'
import Call from '../call/Call'
import Footer from '../footer/Footer'

const Home = () => {
  return (
    

    <>
    <Nav/>
    <Hero/>
    <About/>
    <Projects/>
    <Packs/>
    <Services/>
    <Call/>
    <Footer/>
    </>


  )
}

export default Home