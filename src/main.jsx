import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'




import BasisTask from './BasisTask.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
 
  
<BasisTask/>
  </StrictMode>,
)
