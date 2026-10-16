import { useState } from 'react'
import Navbar from './comoponents/Navbar'
import Hero from './comoponents/Hero'
import Stats from './comoponents/Stats'
import Projects from './comoponents/Projects';
import About from './comoponents/About'
import Services from './comoponents/Services'
function App() {
  return (
    <>
       <Navbar />
       <Hero />
       <Stats />
       <Projects/>
       <About />
       <Services />
    </>
  )
}

export default App
