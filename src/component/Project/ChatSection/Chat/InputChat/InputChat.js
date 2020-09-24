import React from 'react';
import './inputChat.css'

const InputChat = () => {
const onSubmitMessage = (e) => {
    e.preventDefault()
    console.log("yosh")
}
    return (
        <div className="inputChat">
            <form onSubmit={onSubmitMessage}>
                <textarea id="story" name="story"  rows="3" cols="33">
                    Ecrire un message
                </textarea>

                <button type= "submit">Envoyer</button>
            </form>
        </div>
    )
};

export default InputChat;