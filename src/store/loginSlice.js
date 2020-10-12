import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { useHistory } from "react-router-dom";

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

        const response =  await axios.post(`http://localhost:3001/login`, { "email": email, "password": password })
        console.log(response)
        console.log(response.headers)
        if (response.headers.role === "Admin") {
            console.log("c'est bien un admin")
        }
        
        return (
            {
                data : response.data,
                status : response.statusText,
                headers : response.headers
            }
        )

    }
)

const loginSlice = createSlice ({
    name: "login",
    initialState: {
        email : "",
        password : "",
        role:"",
        isloged : "",
        token : "",
    },
    reducers: {
        onErroLoged:(state, action) => {
            state.isloged = "NO"
        },
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
                const mailAndPassUser = action.payload.data
                localStorage.setItem("userToken", action.payload.headers.authtoken);
                state.isloged = action.payload.status
                state.token = action.payload.headers.authtoken
                state.role= action.payload.headers.role
                state.user = {...state.user, mailAndPassUser}
                return state
        },
    },
})

export default loginSlice.reducer;
export const {onEmailInput, onPasswordInput, sendLogin, onLoginAccept, onErroLoged } = loginSlice.actions;