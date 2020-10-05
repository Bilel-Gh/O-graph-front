import React from "react";
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBIcon, MDBInput } from 'mdbreact';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

const LoginInput = () => {
return (
  <MDBContainer>
  <MDBRow>
    <MDBCol md="6">
      <form>
        <p className="h5 text-center mb-4">Subscribe</p>
        <div className="my-white-text">
        <MDBInput label="Email" icon="envelope" group type="email" 
             />
          <MDBInput label="Mot de passe" icon="lock" group type="password" />
        </div>
        <div className="text-center">
          <MDBBtn outline color="white">
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

export default LoginInput;