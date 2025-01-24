import React, { useState } from 'react'
import Modal from './Modal'

const PageWithModal = () => {
  const [showModal, setShowModal] = useState(false)

  const hideModal = () => {
    setShowModal(false);
  }

  const displayModal = () => {
    setShowModal(true)
  }

  return (
    <>
        {showModal && 
        <Modal bg="rgba(255, 0 ,0 ,.3)"
            onClose={()=>hideModal()}
        > 
        
            <h1>hahah </h1>
            <button onClick={()=>hideModal()}>Hide Modal</button> 
        </Modal>}

        <button onClick={() => displayModal()}>Show Modal</button>
    </>
  )
}

export default PageWithModal