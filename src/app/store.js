import { configureStore } from '@reduxjs/toolkit';
import counterReducer from "../features/counter/counterSlice"


// features özellikler
export default configureStore({
    reducer: {
        counter: counterReducer
    }
});