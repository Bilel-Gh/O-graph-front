import React, {useState, useEffect, useRef} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import MessageChat from './MessageChat/MessageChat'
import InputChat from './InputChat/InputChat'
import {fetchComment} from '../../../../store/messageSlice'
import {fetchUserById} from '../../../..//store/userSlice'
import socket from '../../../socketIo/SocketIo'
import store from '../../../../store';
import './chat.css'

const Chat = () => {
    const scrollChat = useRef(null);
    const messages = useSelector(state => state.messageSlice);
    const userState = useSelector(state => state.userSlice)
    const dispatch = useDispatch();
    const states = store.getState();

    const fillMessage = () => {
        // const messageList = [...messages.listMessage]
       
       
        return(
            <div className="message-master">
                { messages.listMessage.map( (message, i) => {
                  //console.log(messages.listMessage)
                    //  dispatch(fetchUserById(message.user_id))

                        return (
                            <div className="chat-master" key={i}>
                                <MessageChat stateMessage={message} />
                            </div>
                        )
                    })
                }
            </div>

        )
    }


    useEffect(()=>{
        socket.on('SendNewComment', (state)=>{
           
            dispatch(fetchComment(states))
            // if(messages.commentListUsed.id===state){
            //     console.log(socket)
            //     console.log(states, "state receinve")

            // }
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
