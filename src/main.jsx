import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Tovi from './tovi.jsx'
import Gitty from './Gitty.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Tovi/>
    <Gitty />
  </StrictMode>,
)
