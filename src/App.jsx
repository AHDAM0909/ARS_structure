import { useState } from 'react'
import Navbar from './comoponents/Navbar'
import Hero from './comoponents/Hero'
import Stats from './comoponents/Stats'
import Projects from './comoponents/Projects';
import About from './comoponents/About'
import Services from './comoponents/Services'
import ScrollReveal from './comoponents/Scrollreveal'
function App() {
  return (
    <>
       <Navbar />
       <Hero />
       <Stats />
         <ScrollReveal>
        <Projects />
      </ScrollReveal>

      <ScrollReveal>
        <About />
      </ScrollReveal>

      <ScrollReveal>
        <Services />
      </ScrollReveal>

      {/* <ScrollReveal>
        <Showcase />
      </ScrollReveal> */}
    </>
  )
}

export default App
