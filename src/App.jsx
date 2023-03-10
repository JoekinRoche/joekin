import React from 'react'
// import Header from './components/header/Header'
import Nav from './Components/nav/Nav'
import About from './Components/about/About'
import Contact from './Components/contact/Contact'
import Experience from './Components/experience/Experience'
import Projects from './Components/project/Projects'
import Services from './Components/services/Services'
import Testimonials from './Components/testimonials/Testimonials'
import Footer from './Components/footer/Footer'

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