import React, {useState, useEffect, useRef} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import MessageChat from './MessageChat/MessageChat'
import InputChat from './InputChat/InputChat'
import './chat.css'

const Chat = () => {
    const scrollChat = useRef(null);
    const messages = useSelector(state => state.messageSlice)
    console.log(messages)
    const fillMessage = () => {
        return(
            <div className="message-Content">
                {messages.listMessage.map((message, i) => {
                        console.log(message)
                        return (
                            <div key={i}>
                                <MessageChat stateMessage={message} myMessage={false}/>
                            </div>
                        )
                    })
                }
            </div>

        )
    }
   // objDiv.scrollTop = objDiv.scrollHeight;

    useEffect(()=>{
        if (scrollChat.current){

            console.log(scrollChat.current)
            scrollChat.current.scrollTop = scrollChat.current.scrollHeight;
        }
    },[messages.listMessage])


    return (
        <div className="chatBlock" ref={scrollChat}>
            {/* <MessageChat myMessage={true}/> */}

            { fillMessage() }
        </div>
    )
};

export default Chat;
