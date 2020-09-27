import React, {useState, useEffect, useRef} from 'react';
import {useDispatch, useSelector} from 'react-redux'
import './makeStickers.css'

const MakeStickers = () => {
    // le hook useRef permet de contenir les propriété d une div dans une constante comme un document.getElementById en plus simple
    // suffit de metre ref={la constante ref créé en amont} et s amuser avec la constante
    const imgRef = useRef(null);
    //detecter la fin du chargement de l'image pour pouvoir lancer d'autre function
    const handleImageLoaded = () => {

    }
    // lors du clique sur l image on lance la sauvegarde du stickers dans le reducer
    const saveStickers = () => {

    }
    // on relance le rendu de l image pour afficher le nouveau tableau de stickers
    const createStickers = () => {

    }
    return (
        <div className="main-image">
          <div className='container-stickers-image'  ref={imgRef} >
            <img className='image-comment' onLoad={handleImageLoaded}  src="https://www.muralswallpaper.com/app/uploads/Blue-Illustrated-Landscape-Mountains-Wallpaper-Mural-820x532.jpg" onClick={saveStickers} onContextMenu={(e)=>e.preventDefault()} />
            {createStickers()}
        </div>
       </div>

    )
}

export default MakeStickers