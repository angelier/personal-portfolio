import React from 'react'
import './testimonials.css'
import AVTR from '../../assets/avatar.png'

// import Swiper core and required modules
import { Pagination } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const data = [
  {
    avatar: AVTR,
    name: 'Empresa Fitven',
    review: '"Angelier demonstrated quality in his work, meeting all requirements ahead of schedule. He executed everything meticulously, proving himself to be a professional individual. I recommend him as a freelancer. I will definitely work with him again when needed."'
  },
  {
    avatar: AVTR,
    name: 'Marianela Silva Vera',
    review: '"The experience with Angelier in changing the website was very positive, particularly because he was patient and very tolerant of the changes we requested. We appreciate his help."'
  },
  {
    avatar: AVTR,
    name: 'Eduardo Castro',
    review: '"He is an excellent professional, I definitely recommend him for his objective and highly professional approach!"'
  },
  {
    avatar: AVTR,
    name: 'Facundo',
    review: '"You have done a very good job, in a timely and correct manner, it is very pleasant to work with people like this."'
  },
  {
    avatar: AVTR,
    name: 'Luis',
    review: '"Great working experience with Angelier, very attentive to every detail to ensure everything turns out perfect."'
  } 
]

const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5><a href="https://www.workana.com/freelancer/10f41d64c8d0ced7658ff68712daace0" target='_blank' rel="noreferrer">Workana</a> Customer Review</h5>
      <h2>Testimonials</h2>

      <Swiper className="container testimonials__container"
       // install Swiper modules
       modules={[Pagination]}
       spaceBetween={40}
       slidesPerView={1}
       pagination={{ clickable: true }}>
        {
          data.map(({avatar, name, review}, index) => {
            return (
              <SwiperSlide key={index} className="testimonial">
                <div className="client__avatar">
                  <img src={avatar} alt={name}/>
                </div>
                <h5 className='client__name'>{name}</h5>
                  <small className='client__review'>{review}</small>
              </SwiperSlide> 
            )
          })
        }
      </Swiper>
    </section>
  )
}

export default Testimonials