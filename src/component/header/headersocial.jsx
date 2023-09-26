import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {BsInstagram} from 'react-icons/bs'

const headersocial = () => {
  return (
    <div className='header__social'>
        <a href="https://www.linkedin.com/in/ermohdfaizan" target="_blank"><BsLinkedin/></a>
        <a href="https://github.com/Faizankhan1104" target="_blank"><FaGithub/></a>
        <a href="https://www.instagram.com/er.faizankhan1104" target="_blank"><BsInstagram/></a>
    </div>
  ) 
}

export default headersocial