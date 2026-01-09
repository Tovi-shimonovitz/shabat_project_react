import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from "react-router-dom"
import TasksWhenHosting from "./Tasks/TasksWhenHosting.jsx"

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
       <App />
       < TasksWhenHosting/> 

    </BrowserRouter>

  </StrictMode>,

 
)
