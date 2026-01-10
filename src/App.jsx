

import './App.css'
import { ShowAllLists } from './Shoping/ShowAllLists'
import BasisTask from './Tasks/BasisTask'
import { Routes, Route, Link } from "react-router-dom";
import Shabbat from './homePage'
import { AllLists } from "./Cooking/AllLists";
import { ReadyList } from './ViewReadyList/ReadyList'
import {AllTheLists} from './Tasks/AllTheLists'


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

        <Route path="/BaseTask" element={<BasisTask />}/>
        <Route path="/BaseCooking" element={<AllLists />} />
        <Route path="/EditCooking" element={<ReadyList />} />
        <Route path="/" element={<Shabbat />} />
        <Route path="/BaseShopping" element={<ShowAllLists />} />

      </Routes>




    </>
  )
}

export default App
