import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";


export const postLogine = createAsyncThunk(

    'userSlice/postLogine',
    async(empty, { getState }) => {
        const { email, password } = getState().loginSlice
        const userExist = true
        console.log(email, password)

        const response = await axios.post(`http://localhost:3001/login`, { "email": email, "password": password })
        console.log(response)
        // const youCanPass = response ? userExist : !userExist

        // if (youCanPass) {
        //     console.log("vous pouvez passer")
        // }
        // else {
        //     console.log("Identifiant ou mot de passe incorrect")
        // }
        
        return response.data

    }
)

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
    extraReducers: {

        [postLogine.fulfilled]: (state, action) => {
                const mailAndPassUser = action.payload
                state.user = {...state.user, mailAndPassUser}
                return state
        },
    },
})

export default loginSlice.reducer;
export const {onEmailInput, onPasswordInput, sendLogin } = loginSlice.actions;