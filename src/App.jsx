
import {ShowAllLists} from './Shoping/ShowAllLists'
import './App.css';
import BasisTask from './Tasks/BasisTask'
import { Routes, Route, Link } from "react-router-dom";
import Shabbat from './homePage'


function App() {

  return (
    <>
      <header>
        <Link to="/BaseShopping">shoping</Link>
        <Link to="/BaseTask">home tasks</Link>
        {/* <Link to="/">cooking</Link> */}
        <Link to="/"></Link>
      </header>
      <h1>Preparations for Shabbat</h1>
    
      <Routes>
       <Route path="/" element={ <Shabbat />} />
        <Route path="/BaseShopping" element={<ShowAllLists/>} />
        <Route path="/BaseTask" element={<BasisTask />} />
      </Routes>


    </>
  )
}

export default App
