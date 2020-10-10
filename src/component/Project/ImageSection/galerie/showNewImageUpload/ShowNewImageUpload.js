import React, {useEffect} from 'react';
import NewImageUpload from '../newImageUpload/NewImageUpload';
import {useSelector, useDispatch} from 'react-redux';
import {modalIONewImage, fetchImages} from '../../../../../store/imageSlice';
import './showNewImageUpload.css';


const ShowNewImageUpload = () => {
    const imageState = useSelector(state => state.imageSlice)

    const dispatch = useDispatch()

    useEffect (()=> {
        let state
        dispatch(fetchImages(state))
        console.log("image")
        
    },[])

    const createImageUpload = () => {

        return (
            <> 
            {
                imageState.listAllImages.map(newImage => (
                    <NewImageUpload state={newImage} />
                ))
            }
            </>
        )
    }

    return (
        <div className="container-new-image-upload">
            {createImageUpload()}
            {/* <NewImageUpload  />
            <NewImageUpload  />
            <NewImageUpload  />
            <NewImageUpload  />
            <NewImageUpload  />
            <NewImageUpload  />
            <NewImageUpload  />
            <NewImageUpload  /> */}
        </div>
    )
}

export default ShowNewImageUpload