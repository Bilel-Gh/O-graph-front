import React from 'react';
import './messageChat.css'

const MessageChat = ({myMessage, stateMessage}) => {

    return (
        <div className="messageChat">
            <div className="messageChat-icon" style={myMessage ? {order:2} : {order:1}}>
                {stateMessage.img}
            </div>
            <div className="messageChat-content" style={myMessage ? {order:1}: {order:2}}>
                <div className="messageChat-name"> {stateMessage.name} </div>
                <hr></hr>
                <div className="messageChat-text"> {stateMessage.text} </div>
            </div>
        </div>
    )
};

export default MessageChat;