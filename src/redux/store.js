// store.js
import { configureStore, createSlice } from '@reduxjs/toolkit';
import counterReducer from '../redux/slices/counterSlice'
import {generalApi} from "./services/general.service";
import {pixelsApi} from "./services/pixels.service";

// Создание store с использованием configureStore
const store = configureStore({

    reducer: {
        [generalApi.reducerPath]: generalApi.reducer, // Добавляем редьюсер API
        [pixelsApi.reducerPath]: pixelsApi.reducer,
        counter: counterReducer,
    },
    // Добавляем middleware RTK Query
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(generalApi.middleware, pixelsApi.middleware),
});


export default store;
