import React, {useEffect} from "react";
import './admin.css'
import { onUserRoleChoice, onUserEmailInput, onUserPasswordInput, onUserFirstNameInput, onUserLastNameInput, onUserCompanyInput} from '../../store/userSlice'
import {useSelector, useDispatch} from 'react-redux';
import {postUser, fetchUser} from '../../store/userSlice'
import { generateKey } from '../../store/localStorageSlice'

import { MDBBtn, MDBIcon, MDBInput } from 'mdbreact';
import TextField from '@material-ui/core/TextField';


// const useStateWithLocalStorage = localStorageKey => {
//   const m
 
//   React.useEffect(() => {
//     localStorage.setItem(localStorageKey, user);
//   }, [user]);
 
//   return [user, setUser];
// };


const AdminForm = () => {
  const dispatch = useDispatch();
  const LoginState = useSelector(state => state.loginSlice);
  const UserState = useSelector(state => state.userSlice);
  const LocalStorageState = useSelector(state => state.localStorageSlice);


  useEffect(()=>{
    //  console.log(fetchUser)
    dispatch(fetchUser())
},[])


  useEffect(() => {
    console.log("useEffect storage ok")
    localStorage.setItem('myUserInLocalStorage', UserState.allUsers);
  }, [UserState.allUsers]);

  const handlegenerateKey = (e) => {
    console.log("Entré dans handle generate Key")
    localStorage.getItem('myUserInLocalStorage') ;
    const storageKey = 'myUserInLocalStorage'
    dispatch(generateKey(storageKey))
  }

  const onSubmitUser = (e) => {
    e.preventDefault()
    let empty
    dispatch(postUser(empty))
    console.log("postUser Ok")
    handlegenerateKey()
    console.log("handlegenerateKey Ok")
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

  

  



return (
 <form className="contain-form " autocomplete="off" onSubmit={onSubmitUser} > 
    <div className="label-role"> Role de l'utilisateur </div>
    <section className="champ-form">
      <MDBBtn outline name="client" type="mail" onClick={handleUserRoleChoice} color="blue" >Client</MDBBtn>
      <MDBBtn outline onClick={handleUserRoleChoice} name="graphiste" color="blue" >Graphiste</MDBBtn>
    </section>
    

    <TextField autocomplete="false" required id="standard-basic" color="primary" label="Email" onChange={handleUserEmailChoice} value= {UserState.user.email}/>  
    <TextField autocomplete="false" required id="standard-basic" color="primary" type="password" label="Password" onChange={handleUserPasswordInput} value= {UserState.user.password}/>
    <TextField required id="standard-basic" label="Prénom" color="primary" onChange={handleUserFirstNameInput} value= {UserState.user.first_name}/>  
    <TextField required id="standard-basic" color="primary" label="Nom" onChange={handleUserLastNameInput} value= {UserState.user.last_name}/> 
    <TextField id="standard-basic" color="primary" label="Nom d'entreprise" onChange={handleUserCompanyInput} value= {UserState.user.company_name}/>  
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