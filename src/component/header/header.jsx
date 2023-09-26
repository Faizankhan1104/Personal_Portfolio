import React from 'react'
import './header.css'
import CTA from './CTA' 
import ME from '../../assets/me.png'
import Headersocial from './headersocial'
const header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Mohd Faizan</h1>
        <h5 className="text-light">MERN Stack Developer</h5> 
        <CTA/>
        <div>
        <Headersocial/>
        </div>
        
        <div className="me">
          <img src={ME} alt="ME" />
        </div>
        
        <a href="#contact" className='scroll_down'>Scroll Down</a>
      </div>
    </header>
  )
}

export default header