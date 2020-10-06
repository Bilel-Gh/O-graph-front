    import React from 'react';
    import Header from './Header/Header';
    import ImageSection from './ImageSection/ImageSection';
    import ChatSection from './ChatSection/ChatSection';
    import Galerie from './ImageSection/galerie/Galerie'
    import './project.css'


    const Project = () => {
        return (
            <div className="projectPage">
                <Header/>
                <div className ='main'>
                    <Galerie />
                    {/* <ImageSection/>
                    <ChatSection/>  */}
                </div>     
            </div>
        )
    };

    export default Project;