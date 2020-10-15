    import React from 'react';
    import './header.css'
    import { useHistory } from "react-router-dom";
    import {useSelector, useDispatch} from 'react-redux';
    import { onUserDisconnect } from '../../../store/loginSlice'
    import logo from '../../../logo/logo 2 white.png'

    const Header = () => {
        let history = useHistory();
        const dispatch = useDispatch();
        const LoginState = useSelector(state => state.loginSlice);
        const UserState = useSelector(state => state.userSlice);

        function handleClick() {
            dispatch(onUserDisconnect())
            history.push("/");
          }

          const goToAbout = () => {
            history.push("/about");
          }

        function isdisconected() {
            if (LoginState.isloged !== "OK") {
                return true
            }
            else return false
        }

        return (

            <div className = "header" >
            < nav className = "nav-bar" >
            < div className = "logo" > <a href = "/" onClick={handleClick} > <img src={logo}/> </a></div>

            < ul className = "nav-infos" >
                <li > <a href = "/" onClick={handleClick} > Accueil </a> </li >
                <li > <a href = "/" > Contact </a> </li >
                <li > <a onClick={goToAbout} > à propos </a> </li >
            </ul>

            <ul className = "nav-logout" >
                <li > <a className = "li-name" href = "/" > {UserState.userUsed.last_name} </a> </li >
                <li > <a className = "li-lastname" href = "/" > {UserState.userUsed.first_name} </a> </li >
                <li > <a href = "/" onClick={handleClick} > {isdisconected() ? "Se reconnecter" : "Déconnexion" } </a> </li >
            </ul> </nav>

            </div>
        )

    };

    export default Header;