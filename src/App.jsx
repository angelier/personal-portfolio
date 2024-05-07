import React, { useState }  from 'react'
import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import About from './components/about/About'
import Experience from './components/experience/Experience'
import Services from './components/services/Services'
import Portfolio from './components/portfolio/Portfolio'
import Testimonials from './components/testimonials/Testimonials'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'
import Modal from './components/ui/modal/Modal'

const App = () => {

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalTitle, setModalTitle] = useState('');
  const [modalContent, setModalContent] = useState('');
  const [modalImage, setModalImage] = useState('');

  const openModal = (title, content, image) => {
    setModalTitle(title);
    setModalContent(content);
    setModalImage(image);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setModalTitle('');
    setModalContent('');
    setModalImage('');
  };

  return (
    <>
       <Modal
        isOpen={isModalOpen}
        onClose={closeModal}
        image={modalImage}
        title={modalTitle}
        content={modalContent}
      />
      <Header/>
      <Nav/>
      <About/>
      <Experience/>
      <Services/>
      <Portfolio openModal={openModal}/>
      <Testimonials/>
      <Contact/>
      <Footer/>
    </>
  )
}

export default App