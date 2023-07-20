// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'

import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './componentes/home/Home'
import NotFound from './componentes/notFound/NotFound'
import AllProjects from './componentes/allProjects/AllProjects'

function App() {

  return (

    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/allProjects' element={<AllProjects></AllProjects>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
    </BrowserRouter>
    
  
  )
}

export default App
