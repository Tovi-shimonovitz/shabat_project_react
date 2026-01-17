

import './App.css'
import { ShowAllLists } from './Shoping/ShowAllLists'
import BasisTask from './Tasks/BasisTask'
import { Routes, Route, Link } from "react-router-dom";
import Shabbat from './homePage'
import { AllLists } from "./Cooking/AllLists";
import { CookingReadyList } from './ViewReadyList/CookinkReadyList'
import AllTheLists from './Tasks/AllTheLists';
import { TaskReadyList } from './ViewReadyList/TaskReadyList'
import {ShoppingReadyList} from './ViewReadyList/ShopReadyList'


function App() {

  return (
    <>
      <header>
        <Link to="/BaseShopping">shoping</Link>
        <Link to="/BaseTask">home tasks</Link>
        <Link to="/BaseCooking">cooking</Link>
        <Link to="/">shabbat detailes</Link>
        <Link to="/EditCooking"> to show cooking lists</Link>
        <Link to="/TaskReadyList"> to show task lists</Link>
        <Link to="/ShopingReadyList"> to show shopping lists</Link>
      </header>
      {/* <h1>Preparations for Shabbat</h1> */}

      <Routes>
        <Route path="/BaseTask" element={<AllTheLists />} />
        <Route path="/BaseCooking" element={<AllLists />} />
        <Route path="/EditCooking" element={<CookingReadyList />} />
        <Route path="/" element={<Shabbat />} />
        <Route path="/BaseShopping" element={<ShowAllLists />} />
        <Route path="/TaskReadyList" element={<TaskReadyList />} />
        <Route path="/ShopingReadyList" element={<ShoppingReadyList />} />
      </Routes>




    </>
  )
}

export default App
