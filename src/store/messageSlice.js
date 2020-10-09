import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
// import socketIOClient from "socket.io-client";

// const ENDPOINT = "http://localhost:3001/";
// const socket = socketIOClient(ENDPOINT);

import socket from '../component/socketIo/SocketIo'
//------------------- section data request comment list------------------

// grace au GET on récupère tous les comment_list de la base de donnée.
// on aura besoin de l id du sticker sélectionné qui se trouve dans le imageSlice
// grace au states on va chercher l id et l envoyer dans l url

export const fetchCommentList = createAsyncThunk(
    'messageSlice/fetchAllCommentList',
    async(states, {getState}) => {
        const  {stickerUsed} = getState().imageSlice
        const idSticker = stickerUsed.id
        // console.log(stickerUsed)
        const response = await axios.get(`http://localhost:3001/commentListByStickerId/${idSticker}`)

        return response.data[0]
    }
)

// Post, poster un comment_list en postant le titre qu'on a écrit dans le commentaire.messageSlice
//On récupére les données venant du messageSclice et l imageSlice grace au states
export const postcommentList = createAsyncThunk(

    'messageSlice/postCommentList',

    async(states, {getState}) => {
        const {titreMessage} = getState().messageSlice
        const {stickerUsed} = getState().imageSlice

        const response = await axios.post(`http://localhost:3001/newCommentList`, {
                                                                                         "sticker_id": stickerUsed.id,
                                                                                          "name": titreMessage
                                                                                    })
    // console.log(response.data)
        return response.data
    }
)
//------------------- section data request comment ------------------
// récupérer tous les commentaires d'une comment list
export const fetchComment = createAsyncThunk(
    'messageSlice/fetchAllComment',
    async(states, {getState}) => {
       // const  {commentListUsed} = states.messageSlice
        const  {commentListUsed} = getState().messageSlice
        const idCommentList = commentListUsed.id
        // console.log(idCommentList, "retour du scoketio")
        const response = await axios.get(`http://localhost:3001/comment/${idCommentList}`)
        return response.data
    }
)

// post un commentaire
export const postcomment = createAsyncThunk(
    'messageSlice/postComment',

    async(states, {getState}) => {

        const {messageText,commentListUsed} = getState().messageSlice
        const {user}= getState().userSlice
        // console.log(messageText,commentListUsed.id, user.id )
        const response = await axios.post(`http://localhost:3001/newComment`, {
                                                                                "text": messageText,
                                                                                "list_comment_id": commentListUsed.id,
                                                                                "user_id": user.id
                                                                            })
       
        return ({
            data : response.data,
            userChatName : user.first_name
        })
    }
)


const messageSlice = createSlice ({
    name: 'Chat',
    initialState: {
        idUser : 1,
        name: "Bradou",
        commentListUsed: {
            sticker_id: null,
            name:null,
            id:null
        },
        messageText:"" ,
        errorTiltle : true,
        errorText : true,
        img:"B",
        titreMessage:"",
        newTitreMessage:"",
        modalIOFirstMessage:false,
        listMessage : [],
        allCommentList:[],
        sendingNewComment:false

    },
    reducers  : {
        onMessageInput:(state, action) => {
            state.messageText = action.payload
            return (
                state
            )
        },
        sendMessage:(state, action) => {
            state.listMessage = [ ...state.listMessage, action.payload]
            state.messageText = ""
            return (
                state
            )
        },
        IOModalFirstMessage:(state, action) =>{
            state.modalIOFirstMessage = action.payload;

            return (
                state
            )
        },
        createTitleMessage:(state, action) =>{
            state.titreMessage = action.payload;

            return (
                state
            )
        },
        // a supprimer on en a plus besoins
        validateTitleMessage:(state, action) =>{
            state.titreMessage=state.newTitreMessage;
            state.newTitreMessage="";
            return (
                state
            )
        },
        sendingNewComment: (state, action ) => {
            state.sendingNewComment = action.payload
            return state
        },
        cleaningTextAndTitre: (state, action) => {
            state.messageText = "";
            state.titreMessage= "";
        }

    },
    extraReducers : {
        [fetchCommentList.fulfilled] : (state, action) => {
            if (state.modalIOFirstMessage){
                state.titreMessage=action.payload.name

            }
           state.commentListUsed = action.payload

        },

        [postcommentList.fulfilled] : (state, action) => {
            const newStateCommentList = action.payload;
            state.commentListUsed= newStateCommentList;
            state.allCommentList = [...state.allCommentList, newStateCommentList];
            return state
        },

        [fetchComment.fulfilled] : (state, action) => {
            if (state.modalIOFirstMessage){
          
               state.messageText=action.payload[0].text
            }
            state.listMessage = action.payload.reverse()

        },

        [postcomment.fulfilled] : (state, action) => {
            const newStateComment = {...action.payload.data, userChatName:action.payload.userChatName}
            console.log(newStateComment)
            // socket.emit("NewComment", state.commentListUsed.id);

            state.messageText= "";
            state.titreMessage="";
            state.listMessage = [...state.listMessage, newStateComment]
            return state
        },


    },
})
export const { onMessageInput, sendMessage, IOModalFirstMessage, createTitleMessage, validateTitleMessage, sendingNewComment, cleaningTextAndTitre} = messageSlice.actions;
export default messageSlice.reducer;