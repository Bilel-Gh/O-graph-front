import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const messageSlice = createSlice ({
    name: 'Chat',
    initialState: {
        idUser : 1,
        name: "Bradou",
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