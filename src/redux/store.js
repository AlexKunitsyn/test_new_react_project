// store.js
import { configureStore, createSlice } from '@reduxjs/toolkit';
import counterReducer from '../redux/slices/counterSlice'

// Создание store с использованием configureStore
const store = configureStore({
    reducer: {
        counter: counterReducer,
    },
});

export default store;
