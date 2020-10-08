import React from 'react';
import { Button, Modal } from 'react-bootstrap';
import './newImageUpload.css'

import {useSelector, useDispatch} from 'react-redux';
import {modalIONewImage, uploadImage, postImage, newImageUpload, modalIONewList} from '../../../../../store/imageSlice';

const NewImageUpload = ({state}) => {
    const imageState = useSelector(state=>state.imageSlice)
    const dispatch = useDispatch()
    const handleModalClose = () => {
        dispatch(modalIONewList(true))
    }

    return (

        <div className="vignette-image-upload">
            <div className='contain-image'> 
                {/* <img className='image-upload' src={"https://live.staticflickr.com/5297/5478740508_cbe096faff_b.jpg"}/> */}
                <img className='image-upload' src={state.data}/>
            </div>
            <Button  className="close-button" onClick={handleModalClose} variant="primary">
                                liste de l'image
            </Button>

        </div>
    )
}

export default NewImageUpload