import React from 'react'
import './services.css'
import { BiCheck } from "react-icons/bi";

const Services = () => {
  return (
    <section id='services'>
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>Web Application Development</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon' />
              <p>I specialize in developing robust web applications and APIs using Angular, React.js, .NET Core, and SQL Server.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>My focus is on scalable architectures, microservices implementation, and best development practices for high-quality solutions that meet business needs</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Captar Pagos: I contributed to developing an online payment management solution using Angular, .NET Core 3.1, and SQL Server.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>NRSolution: I played a key role in developing a pharmaceutical laboratory system. I ensured precise instrument control and batch sales validation through serial port communication and specific feature development.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Solid Architecture Design: Designed robust architectures using Clean Architecture and applying SOLID principles for code scalability and maintainability.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Process Optimization: Implemented CI/CD practices to automate software development and delivery, reducing delivery times and minimizing errors.</p>
            </li>
      
          </ul>
        </article>
        {/* END OF Web Application Development*/}
        <article className="service">
          <div className="service__head">
            <h3>Technical Consulting and Leadership</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon' />
              <p>I offer specialized services in technical consulting and leadership for software development projects. My expertise includes agile methodologies and robust architecture design.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>I focus on providing strategic guidance, implementing best practices, and effectively leading teams to ensure project success.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>"YClick!" - I developed an advanced technological application for certification and payment processing in the energy industry.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Throughout this project, I led the design and implementation of innovative technical solutions.</p>
            </li>

            <li>
              <BiCheck className='service__list-icon' />
              <p>My proactive and results-oriented approach ensured project success and customer satisfaction.</p>
            </li>


          </ul>
        </article>
        {/* END OF Technical Consulting and Leadership*/}
        <article className="service">
          <div className="service__head">
            <h3>Database Administration</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon' />
              <p>As a database administrator, I have a strong background in designing, implementing, and maintaining both relational and non-relational databases.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>My expertise lies in optimizing queries, ensuring data integrity, and ensuring optimal performance of applications.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>I manage SQL Server and MySQL databases for critical enterprise applications, ensuring data availability and security.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>I have implemented backup and recovery strategies to minimize the risk of data loss and ensure business continuity.</p>
            </li>
      
          </ul>
        </article>
        {/* END OF Database Administration */}
      </div>

    </section>
  )
}

export default Services