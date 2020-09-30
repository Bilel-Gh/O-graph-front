import React from 'react';
import './stickers.css';
import { useDispatch, useSelector } from 'react-redux';



const Stickers = ({stickersList, stateStickerInObject}) => {
    const imageState = useSelector(state => state.imageSlice);
    const defaultStateSticker = {
        top: imageState.sticker.y +"%",
        left: imageState.sticker.x +"%",
        backgroundColor: imageState.sticker.stickerColor
    }
    return (
        <div className="stickers" style={stickersList ? stateStickerInObject : defaultStateSticker }>

        </div>
    )
};
export default Stickers;