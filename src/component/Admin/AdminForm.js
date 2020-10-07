import React from "react";
import './admin.css'
import { onUserRoleChoice, onUserEmailInput, onUserPasswordInput, onUserFirstNameInput, onUserLastNameInput, onUserCompanyInput} from '../../store/userSlice'
import {useSelector, useDispatch} from 'react-redux';

import { MDBBtn, MDBIcon, MDBInput } from 'mdbreact';
import TextField from '@material-ui/core/TextField';




const AdminForm = () => {
  const dispatch = useDispatch();
  const LoginState = useSelector(state => state.loginSlice);
  const UserState = useSelector(state => state.userSlice);

  const handleUserRoleChoice = (e) =>{
    e.preventDefault()
    console.log(e.target.name)
    const role = e.target.name

    dispatch(onUserRoleChoice(
      role
    ))
  }

  const handleUserEmailChoice = (e) =>{
    e.preventDefault()
    console.log(e.target.value)
    const Email = e.target.value

    dispatch(onUserEmailInput(
      Email
    ))
  }


  const handleUserPasswordInput = (e) =>{
    e.preventDefault()
    console.log(e.target.value)
    const Password = e.target.value

    dispatch(onUserPasswordInput(
      Password
    ))
  }

  const handleUserFirstNameInput = (e) =>{
    e.preventDefault()
    console.log(e.target.value)
    const FirstName = e.target.value

    dispatch(onUserFirstNameInput(
      FirstName
    ))
  }

  const handleUserLastNameInput = (e) =>{
    e.preventDefault()
    console.log(e.target.value)
    const LastName = e.target.value

    dispatch(onUserLastNameInput(
      LastName
    ))
  }

  const handleUserCompanyInput = (e) =>{
    e.preventDefault()
    console.log(e.target.value)
    const Company = e.target.value

    dispatch(onUserCompanyInput(
      Company
    ))
  }

  // React.useEffect(() => {
  //   localStorage.setItem('myRoleInLocalStorage', UserState.user.role);
  // }, [UserState.user.role]);



return (
 <form className="contain-form "> 
    <div className="champ-form">
      <div className="label"> Role </div>  
      <MDBBtn outline name="client" type="mail" onClick={handleUserRoleChoice} color="white">Client</MDBBtn>
      <MDBBtn outline onClick={handleUserRoleChoice} name="graphiste" color="white">Graphiste</MDBBtn>
    </div>
    

    <div className="champ-form"> Email </div><TextField  id="standard-basic" label="Email" onChange={handleUserEmailChoice} value= {UserState.user.email}/>  
    <div className="champ-form"> Mot de passe </div> <TextField id="standard-basic" label="Mot de passe" onChange={handleUserPasswordInput} value= {UserState.user.password}/>  
    <div className="champ-form"> Prénom </div> <TextField id="standard-basic" label="Prénom" onChange={handleUserFirstNameInput} value= {UserState.user.first_name}/>  
    <div className="champ-form"> Nom </div><TextField id="standard-basic" label="Nom" onChange={handleUserLastNameInput} value= {UserState.user.last_name}/> 
    <div className="champ-form"> Nom d'entreprise </div> <TextField id="standard-basic" label="Nom d'entreprise" onChange={handleUserCompanyInput} value= {UserState.user.company_name}/>  
    <div className="div-button">
    <MDBBtn type="submit" outline color="white">
              Se connecter
              <MDBIcon far icon="paper-plane" className="ml-1" />
    </MDBBtn> 
    </div>
    
 
  </form>
);

};

export default AdminForm;