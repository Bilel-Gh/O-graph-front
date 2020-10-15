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
                    {isErrorLogin() ? <div className="alert alert-danger" role="alert"> Email ou mot de passe incorrect </div> : <div></div> }
                    <div className="input-container"> <LoginInput/> </div>
                </div>

                <div className="wave-container"> 
                    <svg className="pink-wave" xmlns="http://www.w3.org/2000/svg" viewBox="0 20 1440 320">
                        <path fill=" #FF0066" fill-opacity="1" d="M0,192L48,170.7C96,149,192,107,288,128C384,149,480,235,576,250.7C672,267,768,213,864,176C960,139,1056,117,1152,117.3C1248,117,1344,139,1392,149.3L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
                    </svg>

                    <svg className="blue-wave" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                        <path fill="#1D344C" fill-opacity="1" d="M0,192L48,170.7C96,149,192,107,288,128C384,149,480,235,576,250.7C672,267,768,213,864,176C960,139,1056,117,1152,117.3C1248,117,1344,139,1392,149.3L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
                    </svg>
                </div>
                
            </div>
        )
    };

    export default Login;