// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import Hero from './componentes/hero/Hero'
import About from './componentes/about/About'
import Nav from './componentes/nav/Nav'
import Projects from './componentes/projects/Projects'
import Packs from './componentes/packs/Packs'
import Services from './componentes/services/Services'
import Call from './componentes/call/Call'
import Footer from './componentes/footer/Footer'

function App() {

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

export default App
