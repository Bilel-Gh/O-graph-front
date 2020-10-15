import React,{useEffect} from 'react';
import logo from '../../logo/logo 2.png'
import Card from "./Card"
import { Button, Modal } from 'react-bootstrap';
import { useHistory } from "react-router-dom";
import ImageBilel from '../../Profile Image/LOGO B yellow.gif'
import ImageAlexandre from '../../Profile Image/FD6.jpg'


import './about.css'

    const About = () => {
        let history = useHistory();
        const goBack = () => {
                history.push("/project");
        }

        return (
            <div className="about-page">
                <div className="logo-ograph-about"> 
                        <Button onClick={goBack} className="my-btn-primary" variant="primary">
                        Retour
                        </Button> 
                    <img src={logo} alt="Logo" /> 
                    </div>
                    
                <div className="card-container"> 
                    <Card nom={"Ghandri"} prenom={"Bilel"} poste={"Scrum Master"} text={"Developpeur Front-End. Vive JavaScript, React, Redux et le CSS (oui oui..)"} image={ImageBilel}/>
                    <Card nom={"Olivier"} prenom={"Alexandre"} poste={"Lead dev back"} text={"Developpeur Back-End. Le react, c'est la vie, et le redux-toolkit aussi"} image={ImageAlexandre}/>
                    <Card nom={"Niasme"} prenom={"Laurent"} poste={"Product owner"} text={" Developpeur Front-End. Le react, c'est la vie, et le redux-toolkit aussi"} />
                    <Card nom={"Gadroy"} prenom={"Arno"} poste={"Technical referent"} text={"Developpeur Back-End. Le react, c'est la vie, et le redux-toolkit aussi"}/>
                    <Card nom={""} prenom={"Djack"} poste={"lead dev Front"} text={"Developpeur Front-End. Le react, c'est la vie, et le redux-toolkit aussi Et La Team évidemment"} image={"https://cdn.discordapp.com/attachments/756167034395426829/766300977380196422/Avatar_Djack.jpg"}/>
                </div>
                



                <div className="wave-container"> 
                    <svg className="pink-wave" xmlns="http://www.w3.org/2000/svg" viewBox="0 20 1440 320">
                        <path fill=" #FF0066" fill-opacity="1" d="M0,192L48,170.7C96,149,192,107,288,128C384,149,480,235,576,250.7C672,267,768,213,864,176C960,139,1056,117,1152,117.3C1248,117,1344,139,1392,149.3L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
                    </svg>

                    <svg className="blue-wave" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                        <path fill="#1D344C" fill-opacity="1" d="M0,192L48,170.7C96,149,192,107,288,128C384,149,480,235,576,250.7C672,267,768,213,864,176C960,139,1056,117,1152,117.3C1248,117,1344,139,1392,149.3L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
                    </svg>
                </div>
                

            </div>
        )
    };

export default About;