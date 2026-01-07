
import { BaseList } from './Shoping/BaseList'
import './App.css'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import BasisTask from './BasisTask';

function App() {

  return (
    <>
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


     
    </>
  )
}

export default App
