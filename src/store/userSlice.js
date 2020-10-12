import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import {useSelector, useDispatch} from 'react-redux';
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

export const fetchUserById = createAsyncThunk(
  'user/fetchUserById',
  async(id,{getState}) => {
      const response = await axios.get(`http://localhost:3001/userById/${id}`)
      console.log(response.data)
         

      return response.data
  }
);

export const postUser = createAsyncThunk(
  
  'userSlice/postUser',
  async(empty, { getState }) => {
      const { user } = getState().userSlice
      
      console.log(user)
    

      const response = await axios.post(`http://localhost:3001/createUser`, {  
        "role": user.role|| '',
        "email": user.email,
        "password": user.password,
        "first_name": user.first_name|| '',
        "last_name": user.last_name|| '',
        "company_name": user.company_name|| '',
        "image": "" })

      console.log(response.headers)
      response ? console.log('user crée', response) : console.error()
      
      return (
        {
          responseData:response.data,
          responseHeader:response.headers
        }
        )

  }
)


const userSlice = createSlice({
    name: "user",
    initialState: {
        user: {
            id: 1,
            role: "",
            email: "",
            password: "",
            first_name: "bradoul",
            last_name: "",
            company_name: "",
            image: "",
        },
        userCreated: "",
        userError: "",
        userChat: {
            name: "",
            image: "B"
        },
        allUsers: []
    },

    reducers: {
      onUserError :(state, action) => {
        console.log("dispatch ok error")
        state.userError = "YES"
        return (
          state
      ) 
      },

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

        [postUser.fulfilled]: (state, action) => {
          console.log("ok fullfilled")
            const newUser = action.payload.responseData
            state.allUsers = {...state.allUsers, newUser}
            state.userCreated = "YES"
            return state 
        },

        [fetchUserById.fulfilled]: (state, action) => {
          const newUserChat = action.payload;
          state.userChat.name = action.payload.first_name
          state.allUsers = [...state.allUsers, newUserChat]
          return state
        },
    },
})

export default userSlice.reducer;
export const { onUserRoleChoice, onUserEmailInput, onUserPasswordInput, onUserFirstNameInput, onUserLastNameInput, onUserCompanyInput, onUserError} = userSlice.actions;