import React from 'react';
import './stickers.css';
import { useDispatch, useSelector } from 'react-redux';



const Stickers = ({stickersList, position}) => {
    const imageState = useSelector(state => state.imageSlice);
    const mousePosition = {
        top: imageState.mousePosition.y +"%",
        left: imageState.mousePosition.x +"%"
    }
    return (
        <div className="stickers" style={stickersList ? position : mousePosition }>
            
        </div>
    )
};
export default Stickers;