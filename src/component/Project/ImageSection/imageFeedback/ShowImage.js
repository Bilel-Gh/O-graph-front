import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ShowStickers from '../ShowStickers/ShowStickers'



const ShowImage = ({state, indexCarrousel}) => {
console.log(state)
    return (
        <div className="main-picture">
          <div className='container-stickers-picture' >
            <ShowStickers />
            <img className='self-picture'  src={state.image_url} />

        </div>
       </div>
    )
};

export default ShowImage;