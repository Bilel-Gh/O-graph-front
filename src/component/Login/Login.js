import React,{useEffect} from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import { Input } from 'semantic-ui-react';
import {useSelector, useDispatch} from 'react-redux';
import{onLoginInput, onPasswordInput, sendLogin} from '../../store/loginSlice'
import {fetchUser} from '../../store/userSlice'
import './login.css'



    const Login = () => {
        const LoginState = useSelector(state => state.loginSlice);
        const dispatch = useDispatch();


        const onSubmitLogin = (e) => {
            e.preventDefault()
        dispatch(sendLogin({
            login : LoginState.login ,
            password : LoginState.password
        }))
        }

        const handleLoginInput= (e) =>{
            e.preventDefault()
            const loginInput = e.target.value
            dispatch(onLoginInput(
                loginInput
            ))

        }

        const handlePasswordInput= (e) =>{
            e.preventDefault()
            const passwordInput = e.target.value
            dispatch(onPasswordInput(
                passwordInput
            ))
         }
         useEffect(()=>{
             console.log(fetchUser)
            dispatch(fetchUser())
        },[])

        return (
            <div className="loginPage">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#5000ca" fill-opacity="1" d="M0,224L48,218.7C96,213,192,203,288,170.7C384,139,480,85,576,101.3C672,117,768,203,864,208C960,213,1056,139,1152,122.7C1248,107,1344,149,1392,170.7L1440,192L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path></svg>
                  <div className="loginDiv">

                        <form className="login-Form" onSubmit={onSubmitLogin}>
                            <Input
                            className="login-Chat-User"
                            type="text"
                            placeholder=""
                            onChange={handleLoginInput}
                            value= {LoginState.login}
                            >
                            </Input>

                            <Input
                            className="login-Chat-Password"
                            type="password"
                            onChange={handlePasswordInput}
                            value= {LoginState.password}
                            >
                            </Input>

                            <Link to="/project">
                                <button className="button-Login" type= "submit" > se connecter  </button>
                            </Link>


                        </form>
                   </div>
            </div>
        )
    };

    export default Login;