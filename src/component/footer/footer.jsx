import React from 'react'
import './footer.css'
import {FiInstagram} from 'react-icons/fi'
import {FaFacebookF} from 'react-icons/fa'
import {AiOutlineLinkedin} from 'react-icons/ai'


const footer = () => {
  return (
   <footer>
    <a href="#" className='footer_logo'>ER. MOHD FAIZAN</a>
    <ul className='permalinks'>
      <li > <a href="#">Home</a></li>
      <li > <a href="#about">About</a></li>
      <li > <a href="#experience">Experience</a></li>
      <li > <a href="#contact">contact</a></li>
    </ul>

    <div className="footer_social">
      <a href="https://linkedin.com/in/ermohdfaizan"><AiOutlineLinkedin/></a>
      <a href="https://instagram.com/er.faizankhan1104"><FiInstagram/></a>
      <a href="https://facebook.com"><FaFacebookF/></a>
    </div>

    <div className="footer_copyright">
      <small>&copy; Er. Mohd Faizan  2023</small>
    </div>
   </footer>
  )
}

export default footer