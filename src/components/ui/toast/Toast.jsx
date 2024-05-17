import React from 'react';
import './toast.css';

const Toast = ({ message, onClose }) => {
  return (
    <div className="toast show">
      <span>{message}</span>
      <button onClick={onClose} className="close-button">&times;</button>
    </div>
  );
};

export default Toast;