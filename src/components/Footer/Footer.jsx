import React from 'react';
import './footer.css';
import {GiCurlyWing} from 'react-icons/gi';

const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'><GiCurlyWing className='logoWing'/> MKS <GiCurlyWing className='logoWing logo-left'/> </a>
      <ul className="permalinks">
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#testimonials">Testimonials</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>        
    </footer>
  )
}

export default Footer