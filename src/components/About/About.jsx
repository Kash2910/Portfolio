import React from 'react';
import './about.css';
import ME from '../../assets/me-about.jpg';
import {MdWorkOutline} from 'react-icons/md';
import {FiUsers} from 'react-icons/fi';
import {AiOutlineFolderOpen} from 'react-icons/ai';

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Image" />
          </div>

        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <MdWorkOutline className='about__icon'/>
              <h5>Experience</h5>
              <small>3+ Years</small>
            </article>
            <article className='about__card'>
              <FiUsers className='about__icon'/>
              <h5>Clients</h5>
              <small>50+ worldwide</small>
            </article>
            <article className='about__card'>
              <AiOutlineFolderOpen className='about__icon'/>
              <h5>Projects</h5>
              <small>50+ completed</small>
            </article>
          </div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi similique quas non enim fugiat minima illum. Recusandae, cum sapiente! Doloremque, veniam rerum deserunt aperiam nostrum quia? Vitae incidunt magnam delectus!
            </p>
            <a href="#contact" className='btn btn-primary' >Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About