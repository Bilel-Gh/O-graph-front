import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
// pour faire une requête vers la l'api/ le back
//utiliser la fonction createAsyncThunk() et l'appeler depuis redux toolkit
export const postStickers = createAsyncThunk(
// on met un type
  'imageSlice/postStickers',
// dans une fonction async aller chercher le state du slice désiré grâce à getState()
async (store) => {
  //créer une const state qui feras un getstate() pour nous permettre d'avoir accès à tous les states qu'on veut depuis le store
  const state = store.getState()
  console.log("state")
// on séléctionne les propriétés du state que l'on veut et on les extrait de leurs slice pour y avoir accès
    const {imageId, sticker} = state.imageSlice
//// faire la requete axios et integrer les valeurs de notre BDD sans les propriété du state choisit juste avant
    // const response = await axios.post(`http://localhost:3000/createnewsticker`, {"image_id": imageId, "position_x":sticker.x, "position_y": sticker.y})
//// return les données
    // return response.data
  }
)

const imageSlice = createSlice({
  name: 'Image',
  initialState: {
    imageId:null,
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

