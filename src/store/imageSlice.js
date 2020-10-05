import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios'

export const fetchSticker = createAsyncThunk(
    'imageSlice/fetchAllSticker',
    async() => {
        console.log('test fetch stickers')
        const source = { marcel: 1 }
        const objet = JSON.stringify(source);
        console.log(objet)
        const response = await axios.get(`http://localhost:3001/findstickers/1`)
        return response.data
    }
)

//import store from './index'
// pour faire une requête vers la l'api/ le back
//utiliser la fonction createAsyncThunk() et l'appeler depuis redux toolkit
export const postStickers = createAsyncThunk(

    // on met un type
    'imageSlice/postStickers',
    // dans une fonction async aller chercher le state du slice désiré grâce à getState()
    async(states) => {
        //créer une const state qui feras un getstate() pour nous permettre d'avoir accès à tous les states qu'on veut depuis le store

        console.log(states)
            // on séléctionne les propriétés du state que l'on veut et on les extrait de leurs slice pour y avoir accès
        const { imageId, sticker } = states.imageSlice
            // faire la requete axios et integrer les valeurs de notre BDD sans les propriété du state choisit juste avant
        const response = await axios.post(`http://localhost:3001/createnewsticker`, { "image_id": imageId, "position_x": sticker.x, "position_y": sticker.y })
            //  .then(console.log(response.data))
        console.log(response.data)
            // return les données
        return response.data
    }
)




const imageSlice = createSlice({
    name: 'Image',
    initialState: {
        imageId: 1,
        stickerUsed: {
            id: null,
            image_id: null,
            position_x: "",
            position_y: "",
            visible: true,
            stickerColor: ""
        },
        imageUsed: {
            
        },
        sticker: {
            stickerColor: "",
            x: null,
            y: null,
        },
        creatingSticker: false,
        listStickers: []
    },
    reducers: {
        setMousePosition: (state, action) => {
            state.sticker = {...state.sticker,
                x: action.payload.x,
                y: action.payload.y
            };
            state.stickerUsed = "";
            return (
                state
            )
        },
        createSticker: (state, action) => {
            state.creatingSticker = action.payload
            return (
                state
            )
        },
        setColorSticker: (state, action) => {
            state.sticker.stickerColor = action.payload
            return (state)
        },
        fillListStickers: (state, action) => {

            state.listStickers = [...state.listStickers, state.sticker]
            return (
                state
            )
        },
        switchStickerSelect: (state, action) => {
            // console.log(action.payload)
            state.stickerUsed= action.payload
            return state
        }
    },
    extraReducers : {
        [fetchSticker.fulfilled] : (state, action) => {

            state.listStickers = action.payload
           
        },

        [postStickers.fulfilled] : (state, action) => {
            const newStateSticker = action.payload
            state.stickerUsed= newStateSticker
            state.listStickers = [...state.listStickers, newStateSticker]
            return state
        }
    },
})

export const { setMousePosition, createSticker, fillListStickers, setColorSticker, switchStickerSelect } = imageSlice.actions;
export default imageSlice.reducer;