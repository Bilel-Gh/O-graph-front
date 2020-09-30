import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const loginSlice = createSlice ({
    name: "login",
    initialState: {
        login : "",
        password : ""
    },
    reducers: {
        onLoginInput:(state, action) => {
            state.login = action.payload
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
            state.login = ""
            state.password = ""
            return (
                state
            )
        },
    } ,
})

export default loginSlice.reducer;
export const {onLoginInput, onPasswordInput, sendLogin } = loginSlice.actions;