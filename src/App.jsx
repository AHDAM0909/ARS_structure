import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Stats from './components/Stats';
import Projects from './components/Projects';
import About from './components/About';
import Services from './components/Services';
import ScrollReveal from './components/ScrollReveal';
import Showcase from './components/Showcase';

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
   
    <ScrollReveal>
      <Showcase />
    </ScrollReveal>
    </>
  );
}

export default App;
       
