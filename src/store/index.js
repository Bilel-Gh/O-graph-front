
import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import messageSlice from './messageSlice';

const reducer = combineReducers({
    messageSlice,
})

const store = configureStore({
    reducer,
});

export default store