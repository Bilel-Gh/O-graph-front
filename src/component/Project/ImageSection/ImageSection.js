import React from 'react';
import { Button, Modal } from 'react-bootstrap';

import NewMessage from './newMessage/NewMessage'
import ImageFeedBack from './imageFeedback/ImageFeedBack';
import {useSelector, useDispatch} from 'react-redux';
import { IOModalFirstMessage } from '../../../store/messageSlice';
import './imageSection.css'

const ImageSection = () => {
    const dispatch = useDispatch()

    const handleModalOpen = () => {
       dispatch(IOModalFirstMessage(true))
    }

    return (
        <div className="imageSection">
            <div className="header-image-section">
            <Button  onClick={handleModalOpen} variant="secondary">
                ajouter un commentaire sur l'image
            </Button>
            </div>
            -
            <ImageFeedBack />
            +
            <NewMessage/>
        </div>
    )

};

export default ImageSection;