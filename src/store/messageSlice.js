import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const messageSlice = createSlice ({
    name: 'Chat',
    initialState: {
        idUser : 1,
        name: "Bradou",
        listMessage : [
            {
                id : 1 ,
                name : "Bradou",
                img : "B",
                text : "Bla bla bla"
            },
            {
                id : 2 ,
                name : "Gradou",
                img : "G",
                text : "Blo blo blo"
            },
            {
                id : 1 ,
                name : "Bradou",
                img : "B",
                text : "Bla bla bla"
            },
            {
                id : 1 ,
                name : "Bradou",
                img : "B",
                text : "Bla bla bla"
            },
        ]
    },
    reducers  : {

    }
})

export default messageSlice.reducer