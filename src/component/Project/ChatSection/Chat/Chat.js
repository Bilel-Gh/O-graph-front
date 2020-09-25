import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import MessageChat from './MessageChat/MessageChat'
import InputChat from './InputChat/InputChat'
import './chat.css'

const Chat = () => {

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

    return (
        <div className="chatBlock">
            {/* <MessageChat myMessage={true}/> */}

            { fillMessage() }
        </div>
    )
};

export default Chat;
