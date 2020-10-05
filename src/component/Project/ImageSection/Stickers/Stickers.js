import React, {useEffect, useRef} from 'react';
import './stickers.css';
import { useDispatch, useSelector } from 'react-redux';
import {fetchSticker, switchStickerSelect} from '../../../../store/imageSlice';
import {fetchCommentList, fetchComment} from '../../../../store/messageSlice';


import store from './../../../../store';




const Stickers = ({stickersList, stateStickerInObject}) => {
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
    // useEffect(() => {
    //    // const socket = socketIOClient(ENDPOINT);
    //     socket.on("FromAPI", data => {
    //       console.log(data)
    //     });
    //   }, []);

  
 

    const selectSticker = (e) => {
        e.preventDefault()
     
        // console.log("click sticker", {
        //     id: stateStickerInObject.id,
        //     image_id: stateStickerInObject.image_id,
        //     position_x: stateStickerInObject.left,
        //     position_y: stateStickerInObject.top,
        //     visible: true,
        //     stickerColor: stateStickerInObject.backgroundColor

        // })
        if (stateStickerInObject){

            dispatch(switchStickerSelect({
                id: stateStickerInObject.id,
                image_id: stateStickerInObject.image_id,
                position_x: stateStickerInObject.left,
                position_y: stateStickerInObject.top,
                visible: true,
                stickerColor: stateStickerInObject.backgroundColor
            }))
        }

        
    }

    const overSticker = (e) => {
        e.preventDefault()
        // dipatch(overSticker())
        
    }

    useEffect(()=>{

        if(imageState.stickerUsed.id && stateStickerInObject && (imageState.stickerUsed.id===stateStickerInObject.id)){
            dispatch(fetchCommentList(states))
            console.log("nbr dispatch")
        }

    },[imageState.stickerUsed.id]);

    useEffect(()=> {
        if(messageState.commentListUsed.id  && stateStickerInObject && (imageState.stickerUsed.id===stateStickerInObject.id)){

            dispatch(fetchComment(states))
        }
    },[messageState.commentListUsed.id]);

    return (
        <div className="stickers" ref= {stickerRef} style={stickersList ? stateStickerInObject : defaultStateSticker } onMouseOver={overSticker} onClick={selectSticker}>

        </div>
    )
};
export default Stickers;