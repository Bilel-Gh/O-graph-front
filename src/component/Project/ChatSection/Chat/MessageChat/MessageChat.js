import React from 'react';
import './messageChat.css';
import {useSelector, useDispatch} from 'react-redux';

const MessageChat = ({myMessage, stateMessage}) => {
    const userState = useSelector(state=> state.userSlice)
    
    const letterName = () => {
       
        return stateMessage.first_name.slice(0, 1).toUpperCase()
    }

    const checkOwnerMessage = () => {
        if(stateMessage.user_id === userState.userUsed.user_id){
            return true
        }else{
            return false
        }
    }

    return (
<div className="message-container" >
        <div className="message-icon" style={checkOwnerMessage() ? {order:2} : {order:1}}>
                {/* {stateMessage.img} */}
                {letterName()}
        </div>

        <div className="messageChat" style={checkOwnerMessage() ? {order:1}: {order:2}}>
            {/* <div className="messageChat-name" >
                    {stateMessage.userChatName}
            </div> */}
            
            <div className="messageChat-content" >
                <div className="messageChat-name"> {stateMessage.first_name} </div>
                <hr className="line"></hr>
                <div className="messageChat-text"> {stateMessage.text} </div>
            </div>
        </div>
</div>

    )
};

export default MessageChat;