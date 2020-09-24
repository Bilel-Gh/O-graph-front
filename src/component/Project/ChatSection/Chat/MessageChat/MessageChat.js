import React from 'react';
import './messageChat.css'

const MessageChat = ({myMessage}) => {

    return (
        <div className="messageChat">
            <div className="messageChat-icon" style={myMessage ? {order:2} : {order:1}}>
                B
            </div>
            <div className="messageChat-content" style={myMessage ? {order:1}: {order:2}}>
                <div className="messageChat-name"> Brad Marcel </div>
                <hr></hr>
                <div className="messageChat-text"> lorem dkqshdkjqd kgdkjqhdj qkdgkqjgdkq lorem dkqshdkjqd kgdkjqhdj qkdgkqjgdkq lorem dkqshdkjqd kgdkjqhdj qkdgkqjgdkq lorem dkqshdkjqd kgdkjqhdj qkdgkqjgdkq  </div>
            </div>
        </div>
    )
};

export default MessageChat;