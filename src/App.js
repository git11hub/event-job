import logo from './logo.svg';
import './App.css';
// import { Route, Router, Switch } from 'react-router';
import Home from './components/Home/Home';
import { Route, Router, Switch } from 'react-router-dom';

function App() {
  return (
    <Router>    
        <Switch>          
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
        </Switch>   
    </Router>
  );
}

export default App;
