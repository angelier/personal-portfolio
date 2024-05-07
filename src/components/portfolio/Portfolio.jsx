import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio1.jpg'
import IMG2 from '../../assets/portfolio2.jpg'
import IMG3 from '../../assets/portfolio3.jpg'
import IMG4 from '../../assets/portfolio4.jpg'
import IMG5 from '../../assets/portfolio5.jpg'
import IMG6 from '../../assets/portfolio6.jpg'

const data = [
  {
    id: 1,
    image: IMG1,
    title: 'Mis Horas - Hour registration system',
    demo: 'https://dribbble.com/shots/24097724-Project-Mis-horas',
    detail: 'This platform enhances human resources management in the energy industry by automating processes such as tracking hours, licenses, payments, and other aspects related to personnel management. My contribution has helped enhance operational efficiency and productivity in a critical sector for the economy and energy security. Self-management was essential for the successful implementation of this project.'
  },
  {
    id: 2,
    image: IMG2,
    title: 'Captar Pagos - Billing System',
    demo: 'https://dribbble.com/shots/24102906-Captar-Pagos',
    detail: 'Online payment management solution that enhances administrative efficiency across various sectors. As a software developer, my role involved implementing key functionalities, optimizing performance, and ensuring platform security, thereby boosting its ability to enhance business efficiency and competitiveness.'
  },
  {
    id: 3,
    image: IMG3,
    title: 'Codez - Software Development Company',
    demo: 'https://dribbble.com/shots/24102935-Codez',
    detail: 'Codez is a young company founded by me, dedicated to developing innovative, practical, and agile technological tools that provide opportunities to its employees and create value for its clients, offering quality products and services in software and infrastructure development. Our main mission is to provide the most innovative technologies tailored to business needs, aiming to enhance their competitiveness and productivity. To achieve this, we deploy practical solutions customized to their requirements and create new creative solutions. Our foundation lies in leveraging the latest networks.'
  },
  {
    id: 4,
    image: IMG4,
    title: 'Medlog - Container Logistics System',
    demo: 'https://dribbble.com/shots/24102963-Medlog',
    detail: 'My role as a software developer was crucial in designing and implementing a container management system that optimizes the logistics and flow of products in containers entering and leaving Argentina. I contributed to developing functionalities for managing empty and full containers, scheduling shifts, and optimizing their positioning, which had significant implications for efficiency in international trade. With this system, the daily container intake at the depots increased from 300 to 600 containers, representing a significant rise.'
  },
  {
    id: 5,
    image: IMG5,
    title: 'NR Solution | Pharmaceutical laboratory system',
    demo: 'https://dribbble.com/shots/24102967-NR-Solution',
    detail: 'I was involved in the development of the pharmaceutical laboratory system, where my experience as a software developer was crucial in ensuring precise control of hormone measurement instruments. This involved coding serial port communication with these instruments, applying mathematical calculations for contraceptive hormone measurement indicators, and designing and implementing specific features to validate batch sales of contraceptives. These contributions advance the fields of health and medicine, which are prioritized for development and innovation.'
  },
  {
    id: 6,
    image: IMG6,
    title: 'Yclick - Oilfield Services System',
    demo: 'https://dribbble.com/shots/24103642-Y-click',
    detail: 'In this project, my experience as a software developer and technical leader was crucial in developing a technological application for certification and payment of services in the energy industry, specifically for YPF S.A. I contributed to designing and implementing functionalities supporting the entire transaction process, from request generation to automatic invoice submission for certified service payment. Additionally, a cloud-based microservices software architecture was designed to ensure project scalability over time.'
  }
]

const Portfolio = ({ openModal }) => {
  const handleOpenModal = (title, detail, image) => {
    openModal(title, detail, image);
  };

  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {
          data.map(({id, image, title, demo, detail}) => {
            return (
              <article key={id} className='portfolio__item'>
                <div className="portfolio__item-image">
                  <img src={image} alt={title} />
                </div>
      
                <h3>{title}</h3>
                <div className="portfolio__item-cta">
                  <a className='btn' onClick={() => handleOpenModal(title, detail, image)}>Details</a>
                  <a href={demo} className='btn btn-primary' target='_blank' rel='noreferrer'>Live Demo</a>                
                </div>
                
              </article> 
            )
          })
        }
      </div>
     
    </section>
  )
}

export default Portfolio