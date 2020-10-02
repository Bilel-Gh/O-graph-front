import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios'

     export const fetchUser = createAsyncThunk(
        'user/fetchAllUser',
        async () => {
          const response = await axios.get('http://localhost:3001/users')
            console.log(response.data)
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
        }
    },
})

export default userSlice.reducer;
export const {} = userSlice.actions;