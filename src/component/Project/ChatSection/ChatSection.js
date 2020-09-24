    import React from 'react';
    import Chat from './Chat/Chat'
    import InputChat from './Chat/InputChat/InputChat'
    import './chatSection.css'

    const ChatSection = () => {
        return (
            <div className="chatSection">
                <header className="chatSection-header"> Titre </header>
                <Chat/>
                <InputChat/>
            </div>
        )

    };

    export default ChatSection ;