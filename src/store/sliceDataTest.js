import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const sliceDataTest = createSlice({
    name:'sliceDataTest',
    initialState:{
        listStickers:[],
        allCommentList:[],
        allComment:[]
    },
    reducers:{
        fillListStickers :(state, action) => {
state.listStickers=[...state.listStickers, action.payload]
            return state
            },
        fillAllCommentList :(state, action) => {
state.allCommentList=[...state.allCommentList, action.payload]
            return state
            },
        fillAllComment :(state, action) => {
            state.allComment = [...state.allComment, action.payload]
            return state
            },

    }
})

export const {fillListStickers, fillAllCommentList, fillAllComment } = sliceDataTest.actions;
export default sliceDataTest.reducer;