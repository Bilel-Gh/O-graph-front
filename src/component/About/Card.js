import React,{useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import TwitterIcon from '@material-ui/icons/Twitter';
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

import './card.css'

    const Card = ({nom, prenom, poste, text, image}) => {

        return (
            <div className="card">

                {/* Card image */}
                <div class="view view-cascade overlay">
                    <img class="card-img-top" src={image} alt="Card image cap"/>
                    <a>
                    <div class="mask rgba-white-slight"></div>
                    </a>
                </div>

                {/* Card content */}
                <div class="card-body card-body-cascade text-center">               
                    {/* <!-- Title --> */}
                    <h3 class="card-title"><strong>{prenom} {nom}</strong></h3>
                    {/* <!-- Subtitle --> */}
                    <h5 class="font-weight-bold indigo-text py-2">{poste}</h5>
                    {/* <!-- Text --> */}
                    <p class="card-text">{text} </p>      
                </div>
                
                <div className="Social">
                {/* <!-- Facebook --> */}
                <a type="button" class="btn-floating btn-small btn-fb"> <FacebookIcon fontSize="large"/> </a>
                {/* <!-- Twitter --> */}
                <a type="button" class="btn-floating btn-small btn-tw"> <TwitterIcon fontSize="large"/> </a>
                {/* <!-- Linkedin + --> */}
                <a class="btn-floating btn-small px-2 fa-lg li-ic"> <LinkedInIcon fontSize="large" /> </a> 
                </div>
                

            </div>
        )
    };

    export default Card;