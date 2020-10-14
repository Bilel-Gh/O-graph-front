    import React from 'react';
    import Chat from './Chat/Chat'
    import InputChat from './Chat/InputChat/InputChat'
    import {useSelector, useDispatch} from 'react-redux';
    import './chatSection.css'

    const ChatSection = () => {
        const message = useSelector(state => state.messageSlice);
        const imageState = useSelector(state => state.imageSlice);

        const styleHeader = {
            borderBottom: "solid 0.5rem"+ imageState.stickerUsed.stickerColor
        }
        return (
            <div className="chatSection">
                <header className="chatSection-header chatSection-header-border" style={styleHeader}>  {message.commentListUsed.name} </header>
                <Chat/>
                <InputChat/>
            </div>
        )

    };

    export default ChatSection ;