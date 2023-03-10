/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import './footer.css'
import {FaTwitter, FaGithub, FaLinkedin} from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'


const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer_logo'>JoekinRoche</a>
      <ul className='permalinks'>
        <li><a href='#'>Home</a></li>
        <li><a href='#about'>About</a></li>
        <li><a href='#project'>Projects</a></li>
        <li><a href='#experience'>Experience</a></li>
        <li><a href='#services'>Services</a></li>        
        <li><a href='#testimonials'>Testimonials</a></li>
        <li><a href='#contact'>Contact</a></li>
      </ul>
      <div className="footer_socials">
        <a href="https://www.linkedin.com/in/joekin-roche/"><FaLinkedin /></a>
        <a href="https://twitter.com/"><FaTwitter /></a>
        <a href="https://github.com/JoekinRoche"><FaGithub /></a>        
        <a href="https://mail.google.com/mail/u/0/#inbox"><MdEmail /></a>
      </div>
      <div className="footer_copyright">
        <small>&copy; JoekinRoche Portfolio. All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer