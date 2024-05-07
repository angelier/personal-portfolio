import React from 'react'
import './about.css'
import ME from '../../assets/me-about.jpg'
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

    <div className="container about__container">
      <div className="about__me">
        <div className="about__me-image">
          <img src={ME} alt="About" />
        </div>
      </div>

      <div className="about__content">
        <div className="about__cards">
          <article className='about__card'>
            <FaAward className='about__icon'/>
            <h5>Experience</h5>
            <small>5+ Years Working</small>
          </article>

          <article className='about__card'>
            <FiUsers className='about__icon'/>
            <h5>Clients</h5>
            <small>10+ Worldwide</small>
          </article>

          <article className='about__card'>
            <VscFolderLibrary className='about__icon'/>
            <h5>Projects</h5>
            <small>15+ Completed</small>
          </article>
        </div>
        <p>
          I'm a software development professional with a track record of over five years, specializing in web technologies and excelling in .NET, complemented with a strong foundation in React.js. My experience has focused on coding and delivering high-quality software solutions, always aligning business demands with technological imperatives. My career is distinguished by an unwavering dedication to excellence and a focus on continuous improvement. I possess a deep passion for tackling new challenges and embracing learning opportunities that foster my professional and personal development. My proactive attitude and results-driven orientation have allowed me to contribute effectively to cutting-edge projects, meeting the expectations and needs of end users.
        </p>
        <a href="#contact" className='btn btn-primary'>Let's Talk</a>
      </div>
    </div>

    </section>
  )
}

export default About