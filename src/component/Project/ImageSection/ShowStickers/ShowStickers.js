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
                        id: sticker.id,
                        image_id: null,
                        left:sticker.position_x + "%",
                        top:sticker.position_y + "%",
                        visible: true,
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