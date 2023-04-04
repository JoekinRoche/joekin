import React from 'react'
// import Header from './components/header/Header'
import Nav from './Components/nav/nav'
import About from './Components/about/about'
import Contact from './Components/contact/contact'
import Experience from './Components/experience/experience'
import Projects from './Components/project/Projects'
import Services from './Components/services/Services'
import Testimonials from './Components/testimonials/Testimonials'
import Footer from './Components/footer/footer'
import { motion, useScroll } from "framer-motion"



const App = () => {
  return (
    <>
      <About />
      <Projects />
      {/* <Header /> */}
      <Nav />     
      
      <Experience />
      <Services />      
      <Testimonials />
      <Contact />
      <Footer />
    </>
  )
}

export default App