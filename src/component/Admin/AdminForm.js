import React from "react";
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBIcon, MDBInput } from 'mdbreact';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './admin.css'

const AdminForm = () => {
return (
  <MDBContainer className="test">
  <MDBRow>
    <MDBCol md="6">
      <form>
        <p className="h3 text-center mb-4">Connexion</p>
        <div className="my-white-text">
        <MDBInput label="Email de l'utilisateur" icon="envelope" group type="email" 
             />
          <MDBInput label="Mot de passe de l'utilisateur" icon="lock" group type="password" />

          <label icon="lock" >Choisir le role de l'utilisateur</label>
          <br></br>
            <select class="choisir le role de l'utilisateur">
                <option value="1" selected>Client</option>
                <option value="">Graphiste</option>
            </select>


        </div>
        <div className="text-center">
          <MDBBtn outline color="red">
            <Link to="/project"> Se connecter </Link>
            <MDBIcon far icon="paper-plane" className="ml-1" />
          </MDBBtn>
        </div>
      </form>
    </MDBCol>
  </MDBRow>
</MDBContainer>
);
};

export default AdminForm;