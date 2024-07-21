// store.js
import { configureStore, createSlice } from '@reduxjs/toolkit';

// Пример slice состояния
const counterSlice = createSlice({
    name: 'counter',
    initialState: 0,
    reducers: {
        increment: (state) => state + 1,
        decrement: (state) => state - 1,
    },
});

// Экспорт действий для использования в компонентах
export const { increment, decrement } = counterSlice.actions;

// Создание store с использованием configureStore
const store = configureStore({
    reducer: {
        counter: counterSlice.reducer,
    },
});

export default store;
