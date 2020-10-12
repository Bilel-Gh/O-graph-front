import React from 'react';
import './messageChat.css'

const MessageChat = ({myMessage, stateMessage, userMessage}) => {

    const letterName = () => {
        return "a"
        return stateMessage.userChatName.slice(0, 1).toUpperCase()
    }

    return (
<div className="message-container" >
        <div className="message-icon" style={myMessage ? {order:2} : {order:1}}>
                {/* {stateMessage.img} */}
                {letterName()}
        </div>

        <div className="messageChat" style={myMessage ? {order:1}: {order:2}}>
            {/* <div className="messageChat-name" >
                    {stateMessage.userChatName}
            </div> */}
            
            <div className="messageChat-content" >
                <div className="messageChat-name"> {userMessage} </div>
                <hr className="line"></hr>
                <div className="messageChat-text"> {stateMessage.text} </div>
            </div>
        </div>
</div>

    )
};

export default MessageChat;