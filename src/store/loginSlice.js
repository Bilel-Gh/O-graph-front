import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
require('dotenv').config();



  export const postLogine = createAsyncThunk(

      'loginSlice/postLogine',
      async(empty, { getState }) => {
          const { email, password } = getState().loginSlice
          const userExist = true

        console.log(email, password)

        try {
            const response =  await axios.post(`http://localhost:3001/login`, { "email": email, "password": password } )

        console.log(response.headers.user_id)
        
        if (response.headers.role === "admin") {
            console.log("c'est bien un admin")
        }

        console.log(response.data)
        return (
            {
                error: false,
                data : response.data,
                status : response.statusText,
                headers : response.headers
            }
        )
        }catch(err){
            console.log(err.response,"error response")
            return ( {
                error: true,
                logError : err.response
            })
        }

    }
)

const loginSlice = createSlice ({
    name: "login",
    initialState: {
        email : "",
        password : "",
        role:"",
        isloged : "",
        MessageError: "",
        token : "",
        userId:null
    },
    reducers: {
        // onErrorLoged:(state, action) => {
        //     console.log("on error loged")
        //     state.isloged = "NO"
        // },
        onUserDisconnect :(state, action) => {
            console.log("action pour se déco")
            state.isloged = "NOMORE"
            return (
              state
          ) 
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
           
            if (action.payload.error) {
                console.log(action.payload.error)
                state.isloged = "NO"
                state.MessageError = action.payload.error.data
                return state
            }
            else { 
            localStorage.setItem("userToken", action.payload.headers.authtoken);
            state.isloged = action.payload.status
            // state.token = action.payload.headers.authtoken
            state.role= action.payload.headers.role
            state.userId = action.payload.headers.user_id
            // state.user = {...state.user, mailAndPassUser}
            
            return state } 
            
        },
    },
})

export default loginSlice.reducer;
export const {onEmailInput, onPasswordInput, sendLogin, onLoginAccept, onErrorLoged, onUserDisconnect } = loginSlice.actions;