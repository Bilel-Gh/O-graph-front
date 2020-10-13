import React, {useEffect} from "react";
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBIcon, MDBInput } from 'mdbreact';
import {useSelector, useDispatch} from 'react-redux';
import{onEmailInput, onPasswordInput, sendLogin, onErrorLoged} from '../../store/loginSlice'
import {fetchUser, fetchUserById} from '../../store/userSlice'
import {postLogine} from '../../store/loginSlice'
import { useHistory } from "react-router-dom";
import store from './../../store'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";




const LoginInput = () => {

  const LoginState = useSelector(state => state.loginSlice);
  const dispatch = useDispatch();
  let history = useHistory();

  useEffect(()=>{
    console.log(LoginState.isloged)
    if (LoginState.isloged === "OK" && LoginState.role === "admin" ) {
        history.push("/admin");
    }
    if (LoginState.isloged === "OK" && LoginState.role === "client") {
        history.push("/project");
    }
    if (LoginState.isloged === "OK" && LoginState.role === "graphiste") {
      history.push("/project");
    };
    dispatch(fetchUserById(LoginState.userId))
},[LoginState.isloged])

  

  const onSubmitLogin = (e) => {
      e.preventDefault()
      let empty
      dispatch(postLogine(empty))
      // if (LoginState.isloged !== "OK") {
      //   dispatch(onErrorLoged())
      // }
      // onLoginAccept()
      // history.push("/project");
  }

  const handleEmailInput= (e) =>{
      e.preventDefault()
      const emailInput = e.target.value
      dispatch(onEmailInput(
          emailInput
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
      //  console.log(fetchUser)
      dispatch(fetchUser())
  },[])


  return (
    <MDBContainer>
    <MDBRow>
      <MDBCol md="6">
        <form onSubmit={onSubmitLogin}>
          <p className="h3 text-center mb-4">Connexion</p>
          <div className="my-white-text">
          <MDBInput label="Email" icon="envelope" group type="email"
            onChange={handleEmailInput}
            value= {LoginState.email}
          />
            <MDBInput label="Mot de passe" icon="lock" group type="password" type="password"
            onChange={handlePasswordInput}
            value= {LoginState.password}
            />
          </div>
          <div className="text-center">
            <MDBBtn type="submit" outline color="white">
              Se connecter
              <MDBIcon far icon="paper-plane" className="ml-1" />
            </MDBBtn>
          </div>
        </form>
      </MDBCol>
    </MDBRow>
  </MDBContainer>
  );

};

export default LoginInput;