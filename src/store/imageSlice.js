import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const imageSlice = createSlice({
  name: 'Image',
  initialState: {
    sticker: {
    stickerColor : "",
    x:null,
    y:null,
   },
   creatingSticker : false,
   listStickers : []
  },
  reducers:{
    setMousePosition : (state, action) => {
        state.sticker = {...state.sticker,
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
    setColorSticker :(state, action) =>{
    state.sticker.stickerColor = action.payload
    return (state)
    },
    fillListStickers : (state, action) => {

      state.listStickers = [...state.listStickers, state.sticker]
      return (
        state
      )
    }
  },
})

export const {setMousePosition, createSticker, fillListStickers, setColorSticker } = imageSlice.actions;
export default imageSlice.reducer;

