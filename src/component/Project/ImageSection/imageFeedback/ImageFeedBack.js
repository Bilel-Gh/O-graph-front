import React from 'react';
import ShowImage from './ShowImage'
import { MDBCarousel, MDBCarouselCaption, MDBCarouselInner, MDBCarouselItem, MDBView, MDBMask, MDBContainer } from "mdbreact";
import CreateShowImage from './CreateShowImage'
import './imageFeedBack.css'

const ImageFeedBack = () => {

    return (
        <div className="main-image-FeedBack">
           
          
      <MDBCarousel
      activeItem={1}
      length={3}
      showControls={true}
      showIndicators={true}
      className="z-depth-1"
    interval={false}
    >
      <MDBCarouselInner>
     < CreateShowImage />

      </MDBCarouselInner>
    </MDBCarousel>
    
        </div>
    )
}

export default ImageFeedBack;








