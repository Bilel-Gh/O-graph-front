import React from 'react';


import NewMessage from './newMessage/NewMessage'
import ImageFeedBack from './imageFeedback/ImageFeedBack';
import './imageSection.css'

const ImageSection = () => {

    return (
        <div className="imageSection">
            <ImageFeedBack />
            <NewMessage/>
        </div>
    )

};

export default ImageSection;