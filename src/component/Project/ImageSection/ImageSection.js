import React, {useEffect} from 'react';
import { Button, Modal } from 'react-bootstrap';

import NewMessage from './newMessage/NewMessage'
import ImageFeedBack from './imageFeedback/ImageFeedBack';
import {useSelector, useDispatch} from 'react-redux';
import { fetchCommentList, IOModalFirstMessage } from '../../../store/messageSlice';
import {fetchSticker, galerieIO} from '../../../store/imageSlice';
import store from '../../../store';
import './imageSection.css'
import { useHistory } from "react-router-dom";

const ImageSection = () => {
    const dispatch = useDispatch()
    const states = store.getState()
    
    const handleModalOpen = () => {
       dispatch(IOModalFirstMessage(true))
    }

    useEffect (()=>{
       
        // dispatch(fetchSticker())
        // dispatch(fetchCommentList(states))
    },[])

    let history = useHistory();
    const redirectGalerie = () => {
        history.goBack("/project");
        dispatch(galerieIO(true))
    }

    return (
        <div className="imageSection">
            <div className="header-image-section">
            <Button  onClick={handleModalOpen} className="my-btn-primary" variant="primary">
                ajouter un commentaire sur l'image
            </Button>
            <Button  onClick={redirectGalerie} className="my-btn-primary" variant="primary">
                Galerie d'image
            </Button>
            </div>
            
            <ImageFeedBack />
            
            <NewMessage/>
        </div>
    )

};

export default ImageSection;