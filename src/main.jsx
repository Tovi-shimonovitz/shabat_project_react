import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Tovi from './tovi.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Tovi/>
  </StrictMode>,
)
