import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {galerieIO, switchImageUsed} from '../../../../../store/imageSlice';
import '../imageGalerie.css';

const SlotImageGalerie = ({image}) => {
    console.log(image.image_url)
    const dispatch = useDispatch()
    const selectImage = (e) => {
        e.preventDefault()
        console.log(image)
        dispatch(switchImageUsed(image))
        dispatch(galerieIO(false))
       
    }
    return (
        <> 
            <div class="slotImageGalerie mb-3 pics animation all 2">
                <img className="img-fluid" src={image.image_url} alt="Card image cap" onClick={selectImage}/>
            </div>

        
        </>
    )
}

export default SlotImageGalerie