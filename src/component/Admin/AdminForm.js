import React, {useEffect} from "react";
import './admin.css'
import { onUserRoleChoice, onUserEmailInput, onUserPasswordInput, onUserFirstNameInput, onUserLastNameInput, onUserCompanyInput} from '../../store/userSlice'
import {useSelector, useDispatch} from 'react-redux';
import {postUser, fetchUser} from '../../store/userSlice'


import { MDBBtn, MDBIcon, MDBInput } from 'mdbreact';
import TextField from '@material-ui/core/TextField';



const AdminForm = () => {
  const dispatch = useDispatch();
  const LoginState = useSelector(state => state.loginSlice);
  const UserState = useSelector(state => state.userSlice);


  useEffect(()=>{
    //  console.log(fetchUser)
    dispatch(fetchUser())
},[])


  const onSubmitUser = (e) => {
    e.preventDefault()
    let empty
    dispatch(postUser(empty))
    console.log("postUser Ok")
    console.log(UserState)
    // localStorage.getItem('myUserInLocalStorage', UserState.user);
    
  }
      

  const handleUserRoleChoice = (e) =>{
    e.preventDefault()
    const role = e.target.name

    dispatch(onUserRoleChoice(
      role
    ))
  }

  const handleUserEmailChoice = (e) =>{
    e.preventDefault()
    const Email = e.target.value

    dispatch(onUserEmailInput(
      Email
    ))
  }

  const handleUserPasswordInput = (e) =>{
    e.preventDefault()
    const Password = e.target.value

    dispatch(onUserPasswordInput(
      Password
    ))
  }

  const handleUserFirstNameInput = (e) =>{
    e.preventDefault()
    const FirstName = e.target.value

    dispatch(onUserFirstNameInput(
      FirstName
    ))
  }

  const handleUserLastNameInput = (e) =>{
    e.preventDefault()
    const LastName = e.target.value

    dispatch(onUserLastNameInput(
      LastName
    ))
  }

  const handleUserCompanyInput = (e) =>{
    e.preventDefault()
    const Company = e.target.value

    dispatch(onUserCompanyInput(
      Company
    ))
  }

  const isUserCreated = (e) => {
    if (UserState.userCreated === "YES") {
        return true
    }
    if (LoginState.isloged === "" ) {
        return false
    }
    else return false
  }
  
  const roleSelected = () => {
    if (UserState.role === "graphiste") {
      return true
    }
    else return false
  }
  



return (
 <form className="contain-form " autoComplete="off" onSubmit={onSubmitUser} > 
    <div className="label-role"> Role de l'utilisateur </div>
    {isUserCreated() ? <div className="alert alert-success" role="alert"> Utilisateur bien crée </div> : null }
    {/* <div className="alert alert-danger" role="alert"> Email ou mot de passe incorrecte </div> */}
    <section className="champ-form">
      <MDBBtn outline name="client" type="mail" onClick={handleUserRoleChoice} color="blue" >Client</MDBBtn>
      <MDBBtn outline onClick={handleUserRoleChoice} name="graphiste" color="blue" >Graphiste</MDBBtn>
    </section>
    
    <TextField autoComplete="false" required color="primary" label="Email" onChange={handleUserEmailChoice} value= {UserState.user.email}/>  
    <TextField autoComplete="false" required color="primary" type="password" label="Password" onChange={handleUserPasswordInput} value= {UserState.user.password}/>
    <TextField required label="Prénom" color="primary" onChange={handleUserFirstNameInput} value= {UserState.user.first_name}/>  
    <TextField required color="primary" label="Nom" onChange={handleUserLastNameInput} value= {UserState.user.last_name}/> 
    <TextField color="primary" label="Nom d'entreprise" onChange={handleUserCompanyInput} value= {UserState.user.company_name}/>  
    <div className="div-button">
    <MDBBtn type="submit" outline color="blue">
              Créer un Utilisateur
              <MDBIcon far icon="paper-plane" className="ml-1" />
    </MDBBtn> 
    </div>
    
 
  </form>
);

};

export default AdminForm;