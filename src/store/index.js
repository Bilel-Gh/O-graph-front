
import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import messageSlice from './messageSlice';
import imageSlice from './imageSlice';
import loginSlice from './loginSlice';

const reducer = combineReducers({
    messageSlice, imageSlice, loginSlice,
})

const store = configureStore({
    reducer,
});

export default store