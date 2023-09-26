import React from 'react'
import Header from './component/header/header'
import Nav from './component/nav/nav'
import About from './component/about/about'
import Experience from './component/experience/Experience'
import Service from './component/service/service'
import Portfolio from './component/portfolio/portfolio'
import Testimonial from './component/testimonial/testimonial'
import Contact from './component/contact/contact'
import Footer from './component/footer/footer'

const App = () => {
  return (
    <>
        <Header/>
        <Nav/>
        <About/>
        <Experience/>
        {/* <Service/> */}
        {/* <Portfolio/> */}
        {/* <Testimonial/> */}
        <Contact/>
        <Footer/>
        

    </>
  )
}

export default App