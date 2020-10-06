import React,{useEffect} from 'react';
import LoginInput from './LoginInput'

import './login.css'

    const Login = () => {
       

        return (
            <div className="loginPage">
                <div className="loginDiv">
                    <div className="input-container"> <LoginInput/> </div>
                </div>
            </div>
        )
    };

    export default Login;