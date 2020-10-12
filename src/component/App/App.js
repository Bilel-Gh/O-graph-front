import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import Project from '../Project/Project'
import Login from '../Login/Login'
import Admin from '../Admin/Admin'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link, 
  Redirect
} from "react-router-dom";
import 'semantic-ui-css/semantic.min.css'
import './App.css'

function App() {
  const LoginState = useSelector(state => state.loginSlice);
  const isAuthenticated = () => {
    if (LoginState.isloged === "OK") {
      return true
    }
    // Changer à false pour limiter l'accès au page le true est temporaire
    else return true
  }
  return (
    <Router>
      <div className="App">
        <Switch> 
          <Login exact path="/"/>
          {isAuthenticated() ? <Project path="/project"/> : <Redirect to="/" />
 }
          {isAuthenticated() ? <Admin path="/admin"/> : <Redirect to="/" />
 }
        </Switch>
      </div> 
    </Router>
    
  );
}

export default App;
