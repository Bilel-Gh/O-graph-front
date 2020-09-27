import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import{onMessageInput, sendMessage} from '../../../../../store/messageSlice'
import './inputChat.css'


const InputChat = () => {
const message = useSelector(state => state.messageSlice);
const dispatch = useDispatch();
const onSubmitMessage = (e) => {
    e.preventDefault()
dispatch(sendMessage({
    id : message.idUser ,
    name : message.name,
    img : message.img,
    text : message.messageText
}))
}

 const handleMessageText= (e) =>{
    e.preventDefault()
    const text = e.target.value
    dispatch(onMessageInput(
        text
    ))

 }
    return (

        <div className="input-Chat-Div">
            <form className="input-Form" onSubmit={onSubmitMessage}>
                <input
                className="input-Chat"
                type="textarea"data-limit-rows="true" cols="60" rows="8"
                onChange={handleMessageText}
                value= {message.modalIOFirstMessage? "":message.messageText}
                >

                </input>

                <button className="button-Chat" type= "submit">Envoyer</button>
            </form>
        </div>
    )
};

export default InputChat;