import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const localStorageSlice = createSlice({
    name: 'localStorageSlice',
    initialState:{
        key : ""
    },
    reducers:{
        generateKey : (state, action) => {
            console.log(action.payload)
            state.key = action.payload
            return state
        }
    }
})

export const { generateKey } = localStorageSlice.actions;
export default localStorageSlice.reducer;