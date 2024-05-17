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
import Toast from './components/ui/toast/Toast'

const App = () => {

  /* Modal */
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

  /* Toast */
  const addToast = (message) => {
    const id = Date.now();
    setToasts([...toasts, { id, message }]);

    setTimeout(() => {
      setToasts((currentToasts) => currentToasts.filter((toast) => toast.id !== id));
    }, 3000);
  };

  const [toasts, setToasts] = useState([]);

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
      <Contact showToast={addToast} />
      <div id="toast-container">
        {toasts.map((toast) => (
          <Toast key={toast.id} message={toast.message} onClose={() => setToasts(toasts.filter((t) => t.id !== toast.id))} />
        ))}
      </div>
      <Footer/>
    </>
  )
}

export default App