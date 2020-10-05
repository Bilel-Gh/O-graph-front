import React from 'react';
import './messageChat.css'

const MessageChat = ({myMessage, stateMessage}) => {

    return (
<div className="message-container" >
        <div className="message-icon" style={myMessage ? {order:2} : {order:1}}>
                {stateMessage.img}
        </div>

        <div className="messageChat" style={myMessage ? {order:1}: {order:2}}>
            <div className="messageChat-content" >
                <div className="messageChat-name"> {stateMessage.titreMessage} </div>
                <hr className="line"></hr>
                <div className="messageChat-text"> {stateMessage.text} </div>
            </div>
        </div>
</div>

    )
};

export default MessageChat;