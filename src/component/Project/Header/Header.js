    import React from 'react';
    import './header.css'

    const Header = () => {

        return ( <
            div className = "header" >
            <
            nav className = "nav-bar" >
            <
            div className = "logo" > < a href = "#" > O 'GRAPH </a></div> <
            ul className = "nav-infos" >
            <
            li > < a href = "#" > Accueil < /a> </li >
            <
            li > < a href = "#" > Contact < /a> </li >
            <
            li > < a href = "#" > About < /a> </li >
            <
            /ul> <
            ul className = "nav-logout" >
            <
            li > < a className = "li-name"
            href = "#" > Nom < /a> </li >
            <
            li > < a className = "li-lastname"
            href = "#" > Prénom < /a> </li >
            <
            li > < a href = "#" > Déconnexion < /a> </li >
            <
            /ul> <
            /nav>

            <
            /div>
        )

    };

    export default Header;