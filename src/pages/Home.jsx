import React from 'react'
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Stats from "../components/Stats";
import Projects from "../components/Projects";
import About from "../components/About";
import Services from "../components/Services";
import Showcase from "../components/Showcase";
import Process from "../components/Process";
import CTA from "../components/CTA";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import ScrollReveal from "../components/ScrollReveal";
const Home = () => {
  return (
     <>
      <Navbar />
      <main>
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
        <Process />
        <CTA />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default Home