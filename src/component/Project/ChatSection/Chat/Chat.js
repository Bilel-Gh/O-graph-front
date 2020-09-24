import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import MessageChat from './MessageChat/MessageChat'
import InputChat from './InputChat/InputChat'
import './chat.css'

const Chat = () => {
  
    const listMessages = useSelector (state => state.messageSlice)
    console.log(listMessages)
    // const fillMessage = () => {
    //     return(
    //         <div>
    //             {
    //                 listMessages.map((message) => {
    //                     console.log(message)
    //                     return (
    //                         <div> </div>
    //                     )
    //                 })
    //             }
    //         </div>

    //     )
    // }

    return (
        <div className="mainChat"> 
            {/* <MessageChat myMessage={true}/> */}

            {/* {listMessages ? fillMessage() : null} */}
           
            
        </div>
    )
};

export default Chat;
