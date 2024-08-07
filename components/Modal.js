// components/Modal.js
import React from 'react';
import styles from '@styles/Modal.module.css'; // Ensure you create a CSS module for styling

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modalContent}>
        <button className={styles.closeButton} onClick={onClose}>
         Close &times;
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
