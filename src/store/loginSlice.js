import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const loginSlice = createSlice ({
    name: "login",
    initialState: {
        email : "",
        password : ""
    },
    reducers: {
        onEmailInput:(state, action) => {
            state.email = action.payload
            return (
                state
            )
        },
        onPasswordInput:(state, action) => {
            state.password = action.payload
            return (
                state
            )
        },

        sendLogin:(state, action) => {
            state.email = action.payload.email
            state.password = action.payload.password
           
            return (
                state
            )
        },
    } ,
})

export default loginSlice.reducer;
export const {onEmailInput, onPasswordInput, sendLogin } = loginSlice.actions;