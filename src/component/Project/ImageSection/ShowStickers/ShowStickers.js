import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Stickers from '../Stickers/Stickers'



const ShowStickers = () => {
    const imageState = useSelector(state => state.imageSlice);

    const showAllStickers = () => {
        return (
            <div>
                {imageState.listStickers.map((sticker)=> {

                    const stateSticker = {
                        id: 1,
                        left:sticker.x + "%",
                        top:sticker.y + "%",
                        backgroundColor:sticker.stickerColor
                    }
                    return <Stickers  key={stateSticker.left} stickersList={true} stateStickerInObject={stateSticker}/>
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