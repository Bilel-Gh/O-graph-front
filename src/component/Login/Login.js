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
            dispatch(fetchUser)
        },[])

        return (
            <div className="loginPage">
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