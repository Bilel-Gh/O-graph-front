import React from 'react';
import './footer.css'
import { useHistory } from "react-router-dom";

const Footer = () => {

    return ( 
        
        <div className = "footer" >
        < nav className = "footer-bar" >
            < div className = "logo" > <a href="#" > O 'GRAPH </a> </div> 
            <div> © O'GRAPH 2020 </div>
        </nav>


        </div>
    )

};

export default Footer;