    import React from 'react';
    import Chat from './Chat/Chat'
    import InputChat from './Chat/InputChat/InputChat'
    import {useSelector, useDispatch} from 'react-redux';
    import './chatSection.css'

    const ChatSection = () => {
        const message = useSelector(state => state.messageSlice);
        return (
            <div className="chatSection">
                <header className="chatSection-header"> {message.titreMessage} </header>
                <Chat/>
                <InputChat/>
            </div>
        )

    };

    export default ChatSection ;