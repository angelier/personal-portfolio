import React from 'react';
import './modal.css'; // Estilo CSS para el modal
import { IoIosClose } from "react-icons/io";

const Modal = ({ isOpen, onClose, title, content, image }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
        <div className="modal" onClick={(e) => e.stopPropagation()}>  
            <div className='modal-content'>
              <div>
                <a onClick={onClose}><IoIosClose className="icon-close" /></a>
              </div>
              <div className="modal__item-image">
                    <img src={image} alt={title} />
              </div>
        
              <h2>{title}</h2>
              <p>{content}</p>
            </div>
            
        </div>
  </div>
  );
};

export default Modal;