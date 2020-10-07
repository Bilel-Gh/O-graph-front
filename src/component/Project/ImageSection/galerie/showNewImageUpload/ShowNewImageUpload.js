import React, {useEffect} from 'react'
import NewImageUpload from '../newImageUpload/NewImageUpload'
import {useSelector, useDispatch} from 'react-redux';
import './showNewImageUpload.css'


const ShowNewImageUpload = () => {
    const imageState = useSelector(state => state.imageSlice)

    const createImageUpload = () => {

        return (
            <> 
            {
                imageState.listImageNewImage.map(newImage => (
                    <NewImageUpload state={newImage} />
                ))
            }
            </>
        )
    }

    return (
        <div className="container-new-image-upload">
            {createImageUpload()}
            <NewImageUpload  />
            <NewImageUpload  />
            <NewImageUpload  />
            <NewImageUpload  />
            <NewImageUpload  />
            <NewImageUpload  />
            <NewImageUpload  />
            <NewImageUpload  />
        </div>
    )
}

export default ShowNewImageUpload