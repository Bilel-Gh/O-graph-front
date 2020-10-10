import React from 'react';
import { MDBCarousel, MDBCarouselCaption, MDBCarouselInner, MDBCarouselItem, MDBView, MDBMask, MDBContainer } from "mdbreact";
import {useSelector, useDispatch} from 'react-redux';
import ShowImage from './ShowImage';

const CreateShowImage = () => {
  const imageState = useSelector(state => state.imageSlice)

        const makeShowImage = () => {
            return (
              <>
                  {
                    imageState.listAllImages.map((state, index)=> {
                      // console.log(state)
                    return (
                        <MDBCarouselItem itemId={index}  >
                            <MDBView>
                              <ShowImage state={state} indexCarrousel={index}/>
                            </MDBView>
                        </MDBCarouselItem>
                    )
                    })
                  }
              </>
          
              
            )
        }

    return (
        <div> 
            {makeShowImage()}
        </div>
    )
};

export default CreateShowImage