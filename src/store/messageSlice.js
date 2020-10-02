import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios'

// grace au GET on récupère tous les comment_list de la base de donnée. 
// on aura besoin de l id du sticker sélectionné qui se trouve dans le imageSlice
// grace au states on va chercher l id et l envoyer dans l url

export const fetchSticker = createAsyncThunk(
    'imageSlice/fetchAllSticker',
    async(states) => {
        const  {stickerUsed} = states.imageSlice
        const idSticker = stickerUsed.id
        const response = await axios.get(`http://localhost:3001/findstickers/${idSticker}`)

        return response.data
    }
)

// Post, poster un comment_list en postant le titre qu'on a écrit dans le commentaire.messageSlice
//On récupére les données venant du messageSclice et l imageSlice grace au states
export const commentList = createAsyncThunk(

    'imageSlice/postStickers',
 
    async(states) => {
     
        const {newTitreMessage} = states.messageSlice
        const {stickerUsed} = states.imageSlice
        const response = await axios.post(`http://localhost:3001/createnewsticker`, { "sticker_id": stickerUsed.id, "name": newTitreMessage})   
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

        },
        messageText:"" ,
        errorTiltle : true,
        errorText : true,
        img:"B",
        titreMessage:"",
        newTitreMessage:"",
        modalIOFirstMessage:false,
        listMessage : []
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
            state.newTitreMessage = action.payload;

            return (
                state
            )
        },
        validateTitleMessage:(state, action) =>{
            state.titreMessage=state.newTitreMessage;
            state.newTitreMessage="";
            return (
                state
            )
        }

    }
})
export const { onMessageInput, sendMessage, IOModalFirstMessage, createTitleMessage, validateTitleMessage} = messageSlice.actions;
export default messageSlice.reducer;