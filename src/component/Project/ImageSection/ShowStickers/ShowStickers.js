import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Stickers from '../Stickers/Stickers'



const ShowStickers = () => {
    const imageState = useSelector(state => state.imageSlice);
    
    const showAllStickers = () => {
        return (
            <div> 
                {imageState.listStickers.map(sticker=> {
                  
                    const position = {
                        left:sticker.x + "%",
                        top:sticker.y + "%"
                    }
                    return <Stickers stickersList={true} position={position}/>
                })}
            </div>
         
        )
    }
    
    return (
        <div >
            {showAllStickers()}
        </div>
    )
};

export default ShowStickers;