import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

  import Header from './../Project/Header/Header'
  import AdminForm from './AdminForm'

import './admin.css'
import './../Project/Header/header.css'

    const Admin = () => {
       
        return (
            <div className="admin-page">
                <Header/>
                <div className="form-container">
                    <div className="form-header"> Nouveau User</div>
                    <AdminForm className="test"/>
                </div>
                
                  
            </div>
        )
    };

    export default Admin;





