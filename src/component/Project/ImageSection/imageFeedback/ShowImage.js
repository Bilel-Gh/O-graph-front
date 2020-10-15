import React, {useRef, useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ShowStickers from '../ShowStickers/ShowStickers';
import {switchImageUsed, fetchSticker, switchImageCarrousel, getSizeImage} from '../../../../store/imageSlice'
import socket from '../../../socketIo/SocketIo';



const ShowImage = ({state, indexCarrousel}) => {
  const refMainPicture= useRef(null)
  //.closest('caroussel-item')
  const dispatch = useDispatch()
  const imageState = useSelector(state=>state.imageSlice)
 
  useEffect (()=> {
    
    if (refMainPicture.current.parentNode.parentNode.className==="carousel-item active"){
      
      //console.log(indexCarrousel)
      dispatch(switchImageCarrousel(indexCarrousel))
    }
  })

  useEffect (()=>{
    if (refMainPicture.current.parentNode.parentNode.className==="carousel-item active"){
      
      
      // console.log(refMainPicture.current.offsetHeight, refMainPicture.current.offsetWidth)
      dispatch(getSizeImage({widthImage : refMainPicture.current.offsetWidth,
                             heightImage : refMainPicture.current.offsetHeight}))

      dispatch(switchImageUsed(state))
    }
  },[imageState.indexCarrousel])

  useEffect(()=> {
    
    if (imageState.imageUsed.id===state.id){
     

       dispatch(fetchSticker(state))
    }
  },[imageState.imageUsed.id])



  // useEffect(()=> {

  //   const img = new Image();
  //   img.onload = function() {
  //   console.log(this.width + 'x' + this.height);
  //   return {
  //     widthImage : this.width,
  //     heightImage : this.height
  //   }
  // }

  //   img.src = state.image_url

  //   dispatch(getSizeImage(img.onload()))
    
  // },[imageState.imageUsed.image_url])

  const controlSize = () => {
    if (imageState.height > 660){
      return true
    }

  }

    return (

        <div className="main-picture" ref={refMainPicture}>
          <div className='container-stickers-picture' >
            {imageState.imageUsed.id===state.id ? <ShowStickers /> : null}
            {/* <img class={controlSize() ? 'picture-portrait' : 'self-picture'} src={state.image_url} /> */}
            <img className='imageCarrousel' src={state.image_url} />

        </div>
       </div>
    )
};

export default ShowImage;