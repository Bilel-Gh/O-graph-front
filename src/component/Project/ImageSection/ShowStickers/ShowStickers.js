import React, {useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {switchStickerSelect} from '../../../../store/imageSlice'
import Stickers from '../Stickers/Stickers'



const ShowStickers = () => {
    const imageState = useSelector(state => state.imageSlice);
    const dispatch = useDispatch()
    console.log(imageState.listStickers)
    useEffect(()=>{

        if(imageState.listStickers.map[0]){
    
            dispatch(switchStickerSelect(imageState.listStickers.map[0]))
        }
    },[imageState.indexCarrousel])
    const showAllStickers = () => {
        
        
      
        

        return (
            <div>
                {imageState.listStickers.map((sticker, i)=> {
                   
                    const stateSticker = {
                        id: sticker.id,
                        image_id: null,
                        left:sticker.position_x + "%",
                        top:sticker.position_y + "%",
                        visible: true,
                        backgroundColor:sticker.color
                    }
                    //  if(i===0){
                    //      dispatch(switchStickerSelect(stateSticker))
                    //  }                               
                    return <Stickers  key={i+100} stickersList={true} stateStickerInObject={stateSticker} indexStickerArray={i}/>
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