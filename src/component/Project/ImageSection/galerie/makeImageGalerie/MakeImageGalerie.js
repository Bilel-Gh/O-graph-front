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
        <> 
        {createImage()}
        <div class="mb-3 pics animation all 2">
                <img class="img-fluid" src="localhost:3001/public/images/image-1602158591575.jpg" alt="Card image cap"/>
            </div>
        </>
    )
}

export default MakeImageGalerie