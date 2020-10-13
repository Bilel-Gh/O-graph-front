import React,{useEffect} from 'react';
import LoginInput from './LoginInput'
import {useSelector, useDispatch} from 'react-redux';
import logo from '../../logo/logo 2.png'
import Alert from '@material-ui/lab/Alert';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';

import './login.css'

    const Login = () => {
        const LoginState = useSelector(state => state.loginSlice);
          
        const isErrorLogin = () => {
            
            if (LoginState.isloged === "NO" ) {
                return true
            }
            if (LoginState.isloged === "" ) {
                return false
            }
            else return false
        }

        return (
            <div className="loginPage">
                <div className="logo-ograph"> <img src={logo} alt="Logo" /> </div>
                <div className="loginDiv">
                    {isErrorLogin() ? <div className="alert alert-danger" role="alert"> Email ou mot de passe incorrecte </div> : <div></div> }
                    <div className="input-container"> <LoginInput/> </div>
                </div>
            </div>
        )
    };

    export default Login;