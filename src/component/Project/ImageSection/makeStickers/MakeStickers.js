import React, {useState, useEffect, useRef} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Stickers from '../Stickers/Stickers';
import { setMousePosition, createSticker } from '../../../../store/imageSlice';
import {cleaningTextAndTitre} from '../../../../store/messageSlice'
import './makeStickers.css';
import ShowStickers from '../ShowStickers/ShowStickers'

const MakeStickers = () => {
  const imageState = useSelector(state => state.imageSlice);
  const messageState = useSelector(state => state.messageSlice)
    const dispatch = useDispatch()
    // le hook useRef permet de contenir les propriété d une div dans une constante comme un document.getElementById en plus simple
    // suffit de metre ref={la constante ref créé en amont} et s amuser avec la constante
    const imgRef = useRef(null);

    //detecter la fin du chargement de l'image pour pouvoir lancer d'autre function
    const handleImageLoaded = () => {

    }
    // lors du clique sur l image on lance la sauvegarde du stickers dans le reducer
    const saveStickers = (e) => {
        // pour obtenir les coordonées de la souris au click de l'élément il faut utiliser e.nativeEvent.offsetY ou offsetX. car le onclick est sur l'image.

        // on doit mettre le stickers sur l image en top ou left en pourcentage par rapport à l image
        // pour celà on récupère avec imgRef.current le offsetWidth et offsetHeight de la div et on crée le pourcentage
      
        dispatch(cleaningTextAndTitre())
        const percentagePosition = {
          x:(e.nativeEvent.offsetX-8)/imgRef.current.offsetWidth,
          y:(e.nativeEvent.offsetY-7.3)/imgRef.current.offsetHeight
        }

      dispatch(createSticker(true))
      dispatch(setMousePosition({
        x: ((percentagePosition.x)*100).toPrecision(4),
        y: ((percentagePosition.y*100)).toPrecision(4),
      }))
      // dispatch(setMousePosition({
      //   x: e.nativeEvent.offsetX,
      //   y: e.nativeEvent.offsetY,
      // }))
    }
    // on relance le rendu de l image pour afficher le nouveau tableau de stickers


    return (
        <div className="main-image">
          <div className='container-stickers-image'  ref={imgRef} >
            {imageState.creatingSticker ? <Stickers stickersList={false}/> : null}
            <ShowStickers />
            <img className='image-comment' onLoad={handleImageLoaded}  src={imageState.imageUsed.image_url} onClick={saveStickers} onContextMenu={(e)=>e.preventDefault()} />

        </div>
       </div>

    )
}

export default MakeStickers