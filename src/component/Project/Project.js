    import React from 'react';
    import Header from './Header/Header';
    import ImageSection from './ImageSection/ImageSection';
    import ChatSection from './ChatSection/ChatSection';
    import './project.css'


    const Project = () => {
        return (
            <div className="projectPage">
                <Header/>
                <div className ='main'>
                    <ImageSection/>
                    <ChatSection/> 
                </div>     
            </div>
        )
    };

    export default Project;