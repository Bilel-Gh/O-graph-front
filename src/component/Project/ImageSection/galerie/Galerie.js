import React, {useEffect} from 'react';
import { Button, Modal } from 'react-bootstrap';
import ImageGalerie from './ImageGalerie';
import {useSelector, useDispatch} from 'react-redux';
import {modalIONewImage, fetchImages} from '../../../../store/imageSlice';
import FormNewImage from './formNewImage/FormNewImage';


const Galerie = () => {
    const dispatch = useDispatch()
    const handleIONewImage = () => {
        dispatch(modalIONewImage(true))
    };

    useEffect (()=> {
        let state
        dispatch(fetchImages(state))
        
    },[])

    return (
        <div className="galerie-section">
            <div className="header-galerie-section">
            <Button  onClick={handleIONewImage} className="my-btn-primary" variant="primary">
                ajouter une image
            </Button>
            </div>
           <ImageGalerie />
           <FormNewImage />
          
        </div>
    )
}

export default Galerie