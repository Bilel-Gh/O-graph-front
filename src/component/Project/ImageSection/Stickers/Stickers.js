import React, {useRef} from 'react';
import './stickers.css';
import { useDispatch, useSelector } from 'react-redux';
import {fetchSticker, switchStickerSelect} from '../../../../store/imageSlice'



const Stickers = ({stickersList, stateStickerInObject}) => {
    const stickerRef = useRef(null);
    const imageState = useSelector(state => state.imageSlice);
    const dispatch = useDispatch()
    const defaultStateSticker = {
        top: imageState.sticker.y +"%",
        left: imageState.sticker.x +"%",
        backgroundColor: imageState.sticker.stickerColor
    }

    const selectSticker = (e) => {
        e.preventDefault()
        // console.log(e.currentTarget.className)
        // const myStickers = stickerRef.current
        dispatch(switchStickerSelect({
            id: stateStickerInObject.id,
            image_id: stateStickerInObject.image_id,
            position_x: stateStickerInObject.position_x,
            position_y: stateStickerInObject.position_y,
            visible: true,
            stickerColor: stateStickerInObject.backgroundColor
        }))

        
    }

    const overSticker = (e) => {
        e.preventDefault()
        // dipatch(overSticker())
        
    }
    return (
        <div className="stickers" ref= {stickerRef} style={stickersList ? stateStickerInObject : defaultStateSticker } onMouseOver={overSticker} onClick={selectSticker}>

        </div>
    )
};
export default Stickers;