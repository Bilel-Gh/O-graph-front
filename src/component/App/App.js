import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import Project from '../Project/Project';
import Login from '../Login/Login';
import Admin from '../Admin/Admin';
import About from '../About/About';
import DOMPurify from 'dompurify';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";
import 'semantic-ui-css/semantic.min.css'
import './App.css'

require('dotenv').config();



function App() {
  const clean = DOMPurify.sanitize(App);
  const LoginState = useSelector(state => state.loginSlice);
  const isAuthenticated = () => {
    if (LoginState.isloged === "OK") {
      return true
    }
    // Changer à false pour limiter l'accès au page le true est temporaire
    else return false
  }
  return (
    <Router>
      <div className="App">
        <Switch>
          <Login exact path="/"/>
          <About path="/about"/>  
          {isAuthenticated() ? <Project path="/project"/> : <Redirect to="/" />}
          {isAuthenticated() ? <Admin path="/admin"/> : <Redirect to="/" /> } 
        </Switch>
      </div>
    </Router>
  );
}
export default App;
