
import { BaseList } from "./Shoping/BaseList";
import './App.css'
import BasisTask from './Tasks/BasisTask'
import { Routes, Route, Link } from "react-router-dom";
import Shabbat from './homePage'
import { AllLists } from "./Cooking/AllLists";
import TasksWhenTraveling from "./Tasks/TaskWhenTraveling";
import TasksWhenHosting from './Tasks/TasksWhenHosting'
import { ReadyList } from './ViewReadyList/ReadyList'



function App() {

  return (
    <>
      <header>
        <Link to="/BaseShopping">shoping</Link>
        <Link to="/BaseTask">home tasks</Link>
        <Link to="/BaseCooking">cooking</Link>
        <Link to="/">shabbat detailes</Link>
        <Link to="/EditCooking"> to show edit lists</Link>
      </header>
      <h1>Preparations for Shabbat</h1>

      <Routes>
    
        <Route path="/" element={<Shabbat />} />
        <Route path="/BaseShopping" element={<BaseList />} />
        <Route path="/BaseTask" element={<><BasisTask /> <TasksWhenTraveling /> <TasksWhenHosting /></>} />
        <Route path="/BaseCooking" element={<AllLists />} />
       
        <Route
          path="/EditCooking"
          element={<ReadyList />}
        />

      </Routes>


    </>
  )
}

export default App
