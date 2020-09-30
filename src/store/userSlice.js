import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios'

     export const fetchUser = createAsyncThunk(
        'user/fetchAllUser',
        async () => {
            console.log("user Slice test")
        //   const response = await axios.get('http://localhost:3001/users')
        //     console.log(response.data)
        //   return response.data
        }
      )

const userSlice = createSlice ({
    name: "user",
    initialState: {
       user:{
        role:"",
        email:"",
        password:"",
        first_name:"",
        last_name:"",
        company_name:"",
        image:"",
       }
    },
    reducers: {
        allUsers:(state, action) => {

            return (
                state
            )
        },

    } ,
})

export default userSlice.reducer;
export const {} = userSlice.actions;