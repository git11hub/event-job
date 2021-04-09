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
import About from './components/About/About';
import JobDetails from './components/JobDetails/JobDetails';

export const UserContext = createContext();
export const JobContext = createContext();


function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  const [jobList, setJobList] = useState([]);
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <JobContext.Provider value={[jobList, setJobList]}>
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
              <Route path="/about">
                <About />
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
              <Route path="/jobdetails/:id">
                <JobDetails />
              </Route>
            </Switch>
          </Router>
        </Container>
      </JobContext.Provider>
    </UserContext.Provider>
  );
}

export default App;
