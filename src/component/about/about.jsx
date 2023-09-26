import React from 'react'
import './about.css'
import ME from '../../assets/me_about.png'
import { FaAward } from 'react-icons/fa'
import { AiOutlineBook } from 'react-icons/ai'
import { HiOutlineLocationMarker } from 'react-icons/hi' 
const about = () => {
  return (
    <section id='about'>
      <h5>Get to know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
          <img src={ME} alt="ME" />
          </div>
        </div>
        <div className="about__content">
          <div className="about_cards">
            <article className="about_card">
              <FaAward className='about_icon'/>
              <h5>Qualification</h5>
              <small>B.tech ECE
               </small>
            </article>

            <article className="about_card">
              <AiOutlineBook className='about_icon'/>
              <h5>Experience</h5>
              <small>Fresher</small>
            </article>

            <article className="about_card">
              <HiOutlineLocationMarker className='about_icon'/>
              <h5>Location</h5>
              <small>Noida</small>
            </article> 
          </div>
          <p>"I'm Mohd Faizan, a recent graduate with a B.tech degree from AKTU. My passion lies in Software Engineer. My goal is to contribute and learn as I embark on this journey. Passion drives me, and I'm eager to make a positive impact.</p>
          <a href='#contact' className='btn btn-primary'>Let's Talk</a>

        </div>
      </div>
    </section>
  )
}

export default about