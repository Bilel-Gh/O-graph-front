import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const messageSlice = createSlice ({
    name: 'Chat',
    initialState: {
        idUser : 1,
        name: "Bradou",
        messageText:"" ,
        img:"B",
        titreMessage:"",
        modalIOFirstMessage:true,
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
            state.titreMessage = action.payload;

            return (
                state
            )
        }

    }
})
export const { onMessageInput, sendMessage, IOModalFirstMessage, createTitleMessage} = messageSlice.actions;
export default messageSlice.reducer