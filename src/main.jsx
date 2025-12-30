import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Shabbat from './homePage.jsx'
import BasisTask from './Tasks/BasisTask.jsx'
import TasksWhenHosting from './Tasks/TasksWhenHosting.jsx'
import TasksWhenTraveling from './Tasks/TaskWhenTraveling.js'
import {AllLists} from './Cooking/AllLists'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Shabbat/>
    <BasisTask/>
     <AllLists/>
  </StrictMode>,
 
)
