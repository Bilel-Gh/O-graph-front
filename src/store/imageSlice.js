import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios'

export const fetchSticker = createAsyncThunk(
    'imageSlice/fetchAllSticker',
    async({getState}) => {
        const {imageUsed} = getState().imageSlice
        const response = await axios.get(`http://localhost:3001/findstickers/${imageUsed.id}`)
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
    async(states,{getState}) => {
        //créer une const state qui feras un getstate() pour nous permettre d'avoir accès à tous les states qu'on veut depuis le store

     
            // on séléctionne les propriétés du state que l'on veut et on les extrait de leurs slice pour y avoir accès
         const { imageUsed, sticker } = getState().imageSlice
            // faire la requete axios et integrer les valeurs de notre BDD sans les propriété du state choisit juste avant
        const response = await axios.post(`http://localhost:3001/createnewsticker`, { "image_id": imageUsed.id, "position_x": sticker.x, "position_y": sticker.y })
          
            // return les données
        return response.data
    }
)


// ------------------------------------------------ Section creation liste image ---------------------------
// get une list d image selon le feedBack utilisé
export const fetchListImage = createAsyncThunk(
    'imageSlice/fetchAllListImage',
    async({getState}) => {
       
        
        const {feedBackUsed} = getState().feedBackSlice
        const response = await axios.get(`http://localhost:3001/imageListByFeedbackId/${feedBackUsed.id}`)
        return response.data
    }
)

// post une liste d image
export const postListImage = createAsyncThunk(
    'imageSlice/postListImage',

    async({getState}) => {

       
        const {newNameListImage}= getState().imageSlice
        const {feedBackUsed} = getState().feedBackSlice
        const response = await axios.post(`http://localhost:3001/newImageList`, {
                                                                                "feedback_id": feedBackUsed.id,
                                                                                "name": newNameListImage
                                                                            })
        console.log(response.data)
        return response.data
    }
)
// ------------------------------------------------ Section creation image ---------------------------
// get les images appartenant à une liste d image
export const fetchImages = createAsyncThunk(
    'imageSlice/fetchAllImage',
    async({getState}) => {
       
        const {listImageUsed}= getState().imageSlice
        
        const response = await axios.get(`http://localhost:3001/imageByListImageId/${listImageUsed.id}`)
        return response.data
    }
)


// post upload l image dans le serveur pour recevoir une url
export const uploadImage = createAsyncThunk(
    'imageSlice/uploadImage',

    async(formData,{getState}) => {
       
        const {newNameListImage,newImage}= getState().imageSlice
    //    console.log(formData)
        const response = await axios.post(`http://localhost:3001/uploadImage`,formData, { headers: {'Content-Type': 'multipart/form-data'} })
        console.log(response.data)
        return response.data
    }
)

// post une liste d image avec l url obtenu
export const postImage = createAsyncThunk(
    'imageSlice/postImage',

    async(state, {getState}) => {
      
        const {newNameListImage,newImage}= getState().imageSlice
        const theState = getState()
       console.log(newImage)
        const response = await axios.post(`http://localhost:3001/newImage`, {
                                                                            "image_url": newImage.image_url,
                                                                            "list_image_id": newImage.list_image_id,
                                                                            "default_height": 1,
                                                                            "default_width": 1
                                                                            })                                                                          
                                                                            
        // console.log(response.data)
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
            image_url: "",
            list_image_id: null,
            default_height: null,
            default_width: null,
            id:null

        },
        newImage: {
            image_url: "",
            list_image_id: null,
            default_height: 1,
            default_width: 1,

        },
        newImageUpload: {
            data:null,
            imageFromServer:false
            
        },
        listImageUsed : {
            feedback_id: 1,
            name: "",
            id:1
         },
         newNameListImage:"",
         
        sticker: {
            stickerColor: "",
             x: null,
            y: null,
               },
        listNewImageUpload:[],
        listImageNewImage: [{checked:true,used:true, name:"jokari"},{checked:false,used:false, name:"jokarmarceli"}, {checked:false,used:false, name:"lucettetos"}],
        modalIONewImage: false,
        modalIONewList:false,
        creatingSticker: false,
        AllListProject:[],
        listStickers: [],
        listImages:[],
        listAllImages:[]
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
        },
        modalIONewImage : (state, action)=> {
            state.modalIONewImage = action.payload;
            return (
                state
            )
        },
        modalIONewList : (state, action)=> {
            state.modalIONewList = action.payload;
            return (
                state
            )
        },
        switchCheckBox : (state, action)=> {
            
            
            return (
                state
            )
        },
        // remplir l array des nouvelles images qu'on upload du disque dure local
        newImageUpload : (state, action) => {
            state.newImageUpload = {...action.payload}
            state.listNewImageUpload = [...state.listNewImageUpload, action.payload]
            return (
                state
            )
        }
    },
    extraReducers : {
        // ----------------------------- post and get stickers -------------------------
        [fetchSticker.fulfilled] : (state, action) => {

            state.listStickers = action.payload

        },

        [postStickers.fulfilled] : (state, action) => {
            const newStateSticker = action.payload
            state.stickerUsed= newStateSticker
            state.listStickers = [...state.listStickers, newStateSticker]
            return state
        },
        // -------------------------------- post and get liste image --------------------------
        [fetchListImage.fulfilled] : (state, action) => {

            state.listImages = action.payload

        },

        [postListImage.fulfilled] : (state, action) => {
            const newListImage = action.payload
            state.listImageUsed= newListImage
            state.listImages = [...state.listImages, newListImage]
            return state
        },
         // -------------------------------- post and get upload image --------------------------
         [fetchImages.fulfilled] : (state, action) => {

            state.listAllImages = action.payload

        },

        [uploadImage.fulfilled] : (state, action) => {
           
            state.newImage.image_url = action.payload.image_url;
           
             state.newImage.list_image_id = state.listImageUsed.id
            return state
        },
        [postImage.fulfilled] : (state, action) => {
            state.listAllImages = [...state.listAllImages, action.payload]
            return state
        }
    },
})

export const { setMousePosition, createSticker, fillListStickers, setColorSticker, switchStickerSelect, modalIONewImage, newImageUpload, modalIONewList, switchCheckBox} = imageSlice.actions;
export default imageSlice.reducer;