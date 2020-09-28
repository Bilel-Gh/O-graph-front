
import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import messageSlice from './messageSlice';
import imageSlice from './imageSlice';

const reducer = combineReducers({
    messageSlice, imageSlice,
})

const store = configureStore({
    reducer,
});

export default store