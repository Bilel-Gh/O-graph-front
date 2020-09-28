import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const imageSlice = createSlice({
  name: 'Image',
  initialState: {
    mousePosition: {
     x:null,
     y:null,
   },
   creatingSticker : false,
   listStickers : []
  },
  reducers:{
    setMousePosition : (state, action) => {
        state.mousePosition = {
                              x:action.payload.x ,
                              y:action.payload.y
                              };              
        return (
            state
        )
    },
    createSticker : (state, action) => {
      state.creatingSticker = action.payload
      return (
        state
        )
    },
    fillListStickers : (state, action) => {
     
      state.listStickers = [...state.listStickers, state.mousePosition]
      return (
        state
      )
    }
  },
})

export const {setMousePosition, createSticker, fillListStickers } = imageSlice.actions;
export default imageSlice.reducer;

