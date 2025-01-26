// store.js
import { configureStore, createSlice } from '@reduxjs/toolkit';
import counterReducer from '../redux/slices/counterSlice'
import {generalApi} from "./services/general.service";

// Создание store с использованием configureStore
const store = configureStore({

    reducer: {
        [generalApi.reducerPath]: generalApi.reducer, // Добавляем редьюсер API
        counter: counterReducer,
    },
    // Добавляем middleware RTK Query
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(generalApi.middleware),
});


export default store;
