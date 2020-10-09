import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {galerieIO} from '../../../../../store/imageSlice';

const SlotImageGalerie = ({image}) => {
    console.log(image.image_url)
    const dispatch = useDispatch()
    const selectImage = (e) => {
        e.preventDefault()
        dispatch(galerieIO(false))
       
    }
    return (
        <> 
            <div class="mb-3 pics animation all 2">
                <img className="img-fluid" src={image.image_url} alt="Card image cap" onClick={selectImage}/>
            </div>

        
        </>
    )
}

export default SlotImageGalerie