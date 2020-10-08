import React from 'react';

const SlotImageGalerie = ({image}) => {
    console.log(image.image_url)


    return (
        <> 
            <div class="mb-3 pics animation all 2">
                <img class="img-fluid" src="localhost:3001/public/images/image-1602158591575.jpg" alt="Card image cap"/>
            </div>

        
        </>
    )
}

export default SlotImageGalerie