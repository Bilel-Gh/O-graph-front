import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';


export const postLogine = createAsyncThunk(

    'userSlice/postLogine',
    async(empty, { getState }) => {
        const { email, password } = getState().loginSlice
        console.log(email, password)

        const response = await axios.post(`http://localhost:3001/login`, { "email": email, "password": password })
        response ? console.log('connexion reussi', response) : console.log(`vous n'etes pas inscrit`)


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