import { configureStore } from '@reduxjs/toolkit';
import counterReducer from "../features/counter/counterSlice"


// features √∂zellikler
export default configureStore({
    reducer: {
        counter: counterReducer
    }
});