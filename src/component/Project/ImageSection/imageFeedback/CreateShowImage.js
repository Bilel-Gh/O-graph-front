import React from 'react';
import { MDBCarousel, MDBCarouselCaption, MDBCarouselInner, MDBCarouselItem, MDBView, MDBMask, MDBContainer } from "mdbreact";
import ShowImage from './ShowImage'
const CreateShowImage = () => {

        const makeShowImage = () => {
            return (
                <MDBCarouselItem itemId="1">
                <MDBView>
                  {/* <img
                    className="d-block w-100"
                    src="https://mdbootstrap.com/img/Photos/Slides/img%20(68).jpg"
                    alt="First slide"
                  /> */}
                  <ShowImage/>
                {/* <MDBMask overlay="black-light" /> */}
                </MDBView>
                {/* <MDBCarouselCaption>
                  <h3 className="h3-responsive">Light mask</h3>
                  <p>First text</p>
                </MDBCarouselCaption> */}
              </MDBCarouselItem>
            )
        }

    return (
        <div> 
            {makeShowImage()}
        </div>
    )
};

export default CreateShowImage