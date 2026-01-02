
import { BaseList } from "./Shoping/BaseList";
import './App.css'
import BasisTask from './BasisTask'
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
        <Route path="/BaseShopping" element={<BaseList />} />
        <Route path="/BaseTask" element={<BasisTask />} />
      </Routes>


    </>
  )
}

export default App
