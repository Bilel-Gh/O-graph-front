import React, {useRef, useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ShowStickers from '../ShowStickers/ShowStickers';
import {switchImageUsed} from '../../../../store/imageSlice'



const ShowImage = ({state, indexCarrousel}) => {
  const refMainPicture= useRef(null)
  //.closest('caroussel-item')
  const dispatch = useDispatch()

  useEffect (()=> {
    if (refMainPicture.current.parentNode.parentNode.className==="carousel-item active"){
   
 
      dispatch(switchImageUsed(state))
    }
    

  })
    return (
        <div className="main-picture" ref={refMainPicture}>
          <div className='container-stickers-picture' >
            <ShowStickers />
            <img className='self-picture'  src={state.image_url} />

        </div>
       </div>
    )
};

export default ShowImage;