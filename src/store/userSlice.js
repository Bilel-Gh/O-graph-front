import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios'

     export const fetchUser = createAsyncThunk(
        'user/fetchAllUser',
        async () => {
          const response = await axios.get('http://localhost:3001/users')
            console.log(response.data)
            // const emailFInd = response.data.find(e => e.email === "bobby@gmail.com")
            // console.log(emailFind.email)

            //console.log(response.data.map( e => { console.log(e.email) }))

          return response.data
        }
      );

    export const testLoginPost = createAsyncThunk (
      'user/postLogin',
          async () => {
            console.log("post")
          }
    )

    export const postLogine = createAsyncThunk(

        'userSlice/postLogine',
        async(empty,{getState} ) => {
          console.log("teste")
          const { email, password } = getState().loginSlice
          console.log(email, password, "email password test")

          const response = await axios.post(`http://localhost:3001/login`, {"email": email, "password": password})
          console.log("Après post")


          return response.data

        }
    )

const userSlice = createSlice ({
    name: "user",
    initialState: {
       user:{
        id:1,
        role:"",
        email:"",
        password:"",
        first_name:"",
        last_name:"",
        company_name:"",
        image:"",
       },
       allUsers:[]
    },

    reducers: {

    } ,


    extraReducers : {
        [fetchUser.fulfilled] : (state, action) => {

            state.allUsers = action.payload
            return state
        },

        [postLogine.fulfilled] : (state, action) => {
          console.log("testa")
          // const mailAndPassUser = action.payload
          // state.user = {...state.user, mailAndPassUser}
          // const newUser = mailAndPassUser
          // state.allUsers = [...state.allUsers, newUser ]
          // return state
      },
    },
})

export default userSlice.reducer;
export const {onPasswordInput, onEmailInput} = userSlice.actions;