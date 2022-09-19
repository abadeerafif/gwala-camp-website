import './App.css';
import Home from './components/homescreen';
import Lggincom from './components/login';
import ResponsiveAppBar from './components/Appbar';
import Mystocks from './components/mystocks';
import {BrowserRouter as Router,Route,Switch}from 'react-router-dom'

function App() {
 
  return (
    <Router>
      <Switch>
        <Route exact path='/login'>
        <Lggincom></Lggincom>
        </Route>
        <Route exact path='/userhome'>
        <Home></Home>
        </Route>
        <Route exact path='/Mystocks'>
        <Mystocks></Mystocks>
        </Route>

      </Switch>

     

    </Router>
    
  );
}

export default App;
