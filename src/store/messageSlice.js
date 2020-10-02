import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios'
//------------------- section data request comment list------------------

// grace au GET on récupère tous les comment_list de la base de donnée. 
// on aura besoin de l id du sticker sélectionné qui se trouve dans le imageSlice
// grace au states on va chercher l id et l envoyer dans l url

export const fetchCommentList = createAsyncThunk(
    'messageSlice/fetchAllCommentList',
    async(states) => {
        const  {stickerUsed} = states.imageSlice
        const idSticker = stickerUsed.id
        const response = await axios.get(`http://localhost:3001/commentListByStickerId/${idSticker}`)

        return response.data
    }
)

// Post, poster un comment_list en postant le titre qu'on a écrit dans le commentaire.messageSlice
//On récupére les données venant du messageSclice et l imageSlice grace au states
export const postcommentList = createAsyncThunk(

    'messageSlice/postCommentList',
 
    async(states) => {
        const {titreMessage} = states.messageSlice
        const {stickerUsed} = states.imageSlice
       
        const response = await axios.post(`http://localhost:3001/newCommentList`, {
                                                                                         "sticker_id": stickerUsed.id,
                                                                                          "name": titreMessage
                                                                                    })  
        console.log(response.data) 
       
        return response.data
    }
)
//------------------- section data request comment ------------------
// récupérer tous les commentaires d'une comment list
export const fetchComment = createAsyncThunk(
    'messageSlice/fetchAllComment',
    async(states) => {
        const  {commentListUsed} = states.messageSlice
        const idCommentLIst = commentListUsed.id
        const response = await axios.get(`http://localhost:3001/comment/${idCommentLIst}`)

        return response.data
    }
)

// post un commentaire
export const postcomment = createAsyncThunk(
    'messageSlice/postComment',
 
    async(states) => {
       
        const {messageText,commentListUsed} = states.messageSlice
        const {user}= states.userSlice
        console.log("post comment", messageText, commentListUsed.id,  user.id )
        const response = await axios.post(`http://localhost:3001/newComment`, { 
                                                                                "text": messageText,
                                                                                "list_comment_id": commentListUsed.id,
                                                                                "user_id": user.id
                                                                            })   
        console.log(response.data)
        return response.data
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
        }

    },
    extraReducers : {
        [fetchCommentList.fulfilled] : (state, action) => {
            state.allCommentList = action.payload
           
        },

        [postcommentList.fulfilled] : (state, action) => {
            const newStateCommentList = action.payload
            state.commentListUsed= newStateCommentList
            state.allCommentList = [...state.allCommentList, newStateCommentList]
            return state
        },

        [fetchComment.fulfilled] : (state, action) => {
            state.listMessage = action.payload
           
        },

        [postcomment.fulfilled] : (state, action) => {
            const newStateComment = action.payload
            state.messageText= newStateComment
            state.listMessage = [...state.listMessage, newStateComment]
            return state
        },
        

    },
})
export const { onMessageInput, sendMessage, IOModalFirstMessage, createTitleMessage, validateTitleMessage, sendingNewComment} = messageSlice.actions;
export default messageSlice.reducer;