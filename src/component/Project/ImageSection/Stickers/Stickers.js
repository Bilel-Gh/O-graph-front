import React, {useEffect, useRef} from 'react';
import './stickers.css';
import { useDispatch, useSelector } from 'react-redux';
import {fetchSticker, switchStickerSelect} from '../../../../store/imageSlice';
import {fetchCommentList, fetchComment} from '../../../../store/messageSlice';


import store from './../../../../store';




const Stickers = ({stickersList, stateStickerInObject, keyId}) => {
    const states = store.getState()
    const stickerRef = useRef(null);
    const imageState = useSelector(state => state.imageSlice);
    const messageState = useSelector(state => state.messageSlice)
    const dispatch = useDispatch()

    const defaultStateSticker = {
        top: imageState.sticker.y +"%",
        left: imageState.sticker.x +"%",
        backgroundColor: imageState.sticker.stickerColor
    }

    const selectSticker = (e) => {
        e.preventDefault()
     

        if (stateStickerInObject){

            dispatch(switchStickerSelect({
                id: stateStickerInObject.id,
                image_id: stateStickerInObject.image_id,
                position_x: stateStickerInObject.left,
                position_y: stateStickerInObject.top,
                visible: true,
                stickerColor: stateStickerInObject.backgroundColor
            }))
            dispatch(fetchCommentList(states))
            dispatch(fetchComment(states))
        }

        
    }

    const overSticker = (e) => {
        e.preventDefault()
        // dipatch(overSticker())
        
    }

    


    return (
        <div className="stickers"  key={keyId} ref= {stickerRef} style={stickersList ? stateStickerInObject : defaultStateSticker } onMouseOver={overSticker} onClick={selectSticker}>

        </div>
    )
};
export default Stickers;