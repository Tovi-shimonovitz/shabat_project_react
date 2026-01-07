
import { BaseList } from "./Shoping/BaseList";
import './App.css'
<<<<<<< HEAD
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import BasisTask from './BasisTask';
=======
import {ShowAllLists} from './Shoping/ShowAllLists'
import './App.css';
import BasisTask from './Tasks/BasisTask'
import { Routes, Route, Link } from "react-router-dom";
import Shabbat from './homePage'
import { AllLists } from "./Cooking/AllLists";
import TasksWhenTraveling from "./Tasks/TaskWhenTraveling";
import TasksWhenHosting from './Tasks/TasksWhenHosting'
import { ReadyList } from './ViewReadyList/ReadyList'


>>>>>>> 8fdd1cb18c79284af057994631704aaf45f06fa6

function App() {

  return (
    <>
<<<<<<< HEAD
    <header>
     <Router>
            <Link to="/shopping">shopping</Link>
            <Link to="/task">home tasks</Link>
            <Link to="/cooking">cooking</Link>
            <Switch>
                <Route path="/shopping">
                    <BaseList />
                </Route>
                <Route path="/task">
                    <BasisTask/>
                </Route>
                <Route path="/cooking">
                    
                </Route>
            </Switch>
        </Router>
      
    </header>
     <h1>Preparations for Shabbat</h1>
=======
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

       <Route path="/" element={ <Shabbat />} />
        <Route path="/BaseShopping" element={<ShowAllLists/>} />
        <Route path="/BaseTask" element={<BasisTask />} />
      </Routes>

>>>>>>> 8fdd1cb18c79284af057994631704aaf45f06fa6


     
    </>
  )
}

export default App
