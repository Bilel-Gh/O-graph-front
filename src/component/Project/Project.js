    import React from 'react';
    import Header from './Header/Header';
    import ImageSection from './ImageSection/ImageSection';
    import ChatSection from './ChatSection/ChatSection';
    import Galerie from './ImageSection/galerie/Galerie'
    import {useSelector, useDispatch} from 'react-redux';
    import './project.css'


    const Project = () => {
        const imageState = useSelector(state => state.imageSlice)
        return (
            <div className="projectPage">
                <Header/>
                <div className ='main'>
                    {imageState.galerieIO ? <Galerie /> : <>  <ImageSection/> <ChatSection/> </>  }
                    
                  
                   
                </div>     
            </div>
        )
    };

    export default Project;