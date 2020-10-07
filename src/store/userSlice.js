import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchUser = createAsyncThunk(
    'user/fetchAllUser',
    async() => {
        const response = await axios.get('http://localhost:3001/users')
        console.log(response.data)
            // const emailFInd = response.data.find(e => e.email === "bobby@gmail.com")
            // console.log(emailFind.email)

        //console.log(response.data.map( e => { console.log(e.email) }))

        return response.data
    }
);


const userSlice = createSlice({
    name: "user",
    initialState: {
        user: {
            id: 1,
            role: "",
            email: "",
            password: "",
            first_name: "",
            last_name: "",
            company_name: "",
            image: "",
        },
        allUsers: []
    },

    reducers: {
      onUserRoleChoice:(state, action) => {
        state.user.role = action.payload
        return (
            state
        ) 
      },
      onUserEmailInput:(state, action) => {
        state.user.email = action.payload
        return (
            state
        )
    },
      onUserPasswordInput:(state, action) => {
        state.user.password = action.payload
        return (
            state
        )
    },
    onUserFirstNameInput:(state, action) => {
        state.user.first_name = action.payload
        return (
            state
        )
    },
      onUserLastNameInput:(state, action) => {
        state.user.last_name = action.payload
        return (
            state
        )
    },

    onUserCompanyInput:(state, action) => {
      state.user.company_name = action.payload
      return (
          state
      )
    }, 
  
  },


    extraReducers: {
        [fetchUser.fulfilled]: (state, action) => {

            state.allUsers = action.payload
            return state
        },
    },
})

export default userSlice.reducer;
export const { onUserRoleChoice, onUserEmailInput, onUserPasswordInput, onUserFirstNameInput, onUserLastNameInput, onUserCompanyInput} = userSlice.actions;