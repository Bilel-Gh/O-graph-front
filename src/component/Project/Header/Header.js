    import React from 'react';
    import './header.css'

    const Header = () => {

        return (
            <div className="header">
                <nav className="nav-bar">
                    <div className="logo">O'GRAPH</div>
                    <ul className="nav-infos">
                        <li> Accueil </li>
                        <li> Contact </li>
                        <li> About </li>
                    </ul>
                    <ul className="nav-logout">
                        <li className="li-name" > Nom </li>
                        <li className="li-lastname" > Prénom </li>
                        <li> Déconnextion </li>
                    </ul>
                 </nav>
                
            </div>
        )

    };

    export default Header; 