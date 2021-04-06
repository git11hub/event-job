import logo from './logo.svg';
import './App.css';
import Home from './components/Home/Home';
// import { Route, Router, Switch } from 'react-router';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import Navbar from './components/Navbar/Navbar';
import Header from './components/Header/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import Login from './components/Login/Login';
import Admin from './components/Admin/Admin';
import User from './components/User/User';
import { createContext, useState } from 'react';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';

export const UserContext = createContext();


function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Container>
        <Router>
          <Header />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/home">
              <Home />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/admin">
              <Admin />
            </Route>
            <Route path="/user">
              <User />
            </Route>
          </Switch>
        </Router>
      </Container>
    </UserContext.Provider>
  );
}

export default App;
