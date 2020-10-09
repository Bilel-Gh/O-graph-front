    import React from 'react';
    import './header.css'
    import { useHistory } from "react-router-dom";

    const Header = () => {
        let history = useHistory();
        function handleClick() {
            history.push("/");
          }

        return ( 
            
            <div className = "header" >
            < nav className = "nav-bar" >
            < div className = "logo" > <a onClick={handleClick} > O 'GRAPH </a></div> 
            
            < ul className = "nav-infos" >
                <li > <a onClick={handleClick} > Accueil </a> </li >
                <li > <a href = "#" > Contact </a> </li >
                <li > <a href = "#" > About </a> </li >
            </ul> 
            
            <ul className = "nav-logout" >
                <li > <a className = "li-name" href = "#" > Nom </a> </li >
                <li > <a className = "li-lastname" href = "#" > Prénom </a> </li >
                <li > <a onClick={handleClick} > Déconnexion </a> </li >
            </ul> </nav>

            </div>
        )

    };

    export default Header;