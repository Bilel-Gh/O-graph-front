import React from 'react';
import Project from '../Project/Project'
import Login from '../Login/Login'
import Admin from '../Admin/Admin'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css'

function App() {
  return (
    <Router>
      <div className="App">
        <Switch> 
          <Project path="/project"/>
          <Login exact path="/"/>
          <Admin path="/admin"/>
        </Switch>
      </div> 
    </Router>
    
  );
}

export default App;
