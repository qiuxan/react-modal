import React from 'react'
import './Modal.css'

interface ModalProps {
    bg?: string;
    children: React.ReactNode;
    onClose?: () => void;
}

const Modal = (props:ModalProps) => {
  var defaultProps ={
    bg: 'rgba(0, 0, 0, 0.5)',
  };

  var data = Object.assign({}, defaultProps, props); // Merge the two objects together without modifying any of them
  
  return (
    <div 
        onClick={() => data.onClose && data.onClose()}
        className='modal'
        style={{backgroundColor: data.bg}}
    >
        <div className="modal-center">
            {data.children}
        </div>

    </div>
  )
}

export default Modal