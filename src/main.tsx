import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Modal from './assets/components/Modal'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Modal />
  </StrictMode>,
)
