import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
<<<<<<< HEAD
import Shabbat from './homePage.jsx'
import BasisTask from './BasisTask.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    
    <Shabbat/>


=======
import { BrowserRouter } from "react-router-dom"



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
       <App />
      
    </BrowserRouter>
   
   
 
>>>>>>> 8fdd1cb18c79284af057994631704aaf45f06fa6
  </StrictMode>,
 
)
