import React, {useState, useEffect, useRef} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import MessageChat from './MessageChat/MessageChat'
import InputChat from './InputChat/InputChat'
import {fetchComment} from '../../../../store/messageSlice'
import socket from '../../../socketIo/SocketIo'
import store from '../../../../store';
import './chat.css'

const Chat = () => {
    const scrollChat = useRef(null);
    const messages = useSelector(state => state.messageSlice);
    const dispatch = useDispatch();
    const states = store.getState();

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
            console.log(state, "state receinve")
            if(messages.commentListUsed.id==state){
                dispatch(fetchComment(states))
            }
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
