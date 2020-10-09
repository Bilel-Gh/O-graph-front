import React, {useEffect} from 'react';
import SlotImageGalerie from '../SlotImageGalerie/SlotImageGalerie';
import {useSelector, useDispatch} from 'react-redux';
import '../imageGalerie.css'

const MakeImageGalerie = () => {
    const imageState = useSelector(state => state.imageSlice)
    const createImage = () => {

        return (
            <>
                {
                    imageState.listAllImages.map(image => {
                        return(
                            <SlotImageGalerie image={image} />
                        )
                    })
                }
            </>
        )
    }

    return (
        <div className="containeImageGalerie"> 
        {createImage()}
    
        </div>
    )
}

export default MakeImageGalerie