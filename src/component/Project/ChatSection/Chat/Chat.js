import React, {useState, useEffect, useRef} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import MessageChat from './MessageChat/MessageChat'
import InputChat from './InputChat/InputChat'
import socketIOClient from "socket.io-client";
import './chat.css'

const Chat = () => {
    const scrollChat = useRef(null);
    const messages = useSelector(state => state.messageSlice)
    const ENDPOINT = "http://localhost:3001/";
    const socket = socketIOClient(ENDPOINT);
    //console.log("rendu trop souvent")
    const fillMessage = () => {
        const messageList = [...messages.listMessage]
       
        return(
            <div className="message-master">
                {messageList.map((message, i) => {

                        return (
                            <div className="chat-master" key={i}>
                                <MessageChat stateMessage={message} myMessage={false}/>
                            </div>
                        )
                    })
                }
            </div>

        )
    }


    useEffect(()=>{
        socket.on('SendNewComment', (state)=>{
            console.log(state, socket.id)
            })
        

    },[])

    useEffect(()=>{
        if (scrollChat.current){
            scrollChat.current.scrollTop = scrollChat.current.scrollHeight;
        }
    },[messages.listMessage])


    return (
        <div className="chatBlock" ref={scrollChat}>
            {/* <MessageChat myMessage={true}/> */}

            { fillMessage() }
        </div>
    )
};

export default Chat;
