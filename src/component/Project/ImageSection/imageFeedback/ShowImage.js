import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ShowStickers from '../ShowStickers/ShowStickers'



const ShowImage = () => {

    return (
        <div className="main-picture">
          <div className='container-stickers-picture' >
            <ShowStickers />
            <img className='self-picture'  src="https://www.muralswallpaper.com/app/uploads/Blue-Illustrated-Landscape-Mountains-Wallpaper-Mural-820x532.jpg" />

        </div>
       </div>
    )
};

export default ShowImage;