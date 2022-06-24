import { createSlice } from '@reduxjs/toolkit'

export const counterSlice = createSlice ({
    name: "counter",
    initialState: {
        value: 0
    },
    reducers: {
        increment: state => {
            state.value++;
        },
        decrement: state => {
            state.value--;
        },
        incrementByAmount: (state,action) => {
            state.value += action.payload
        }
    
    }
    
});

export const { increment, decrement, incrementByAmount } = counterSlice.actions;

export const selectCount = state => state.counter.value;

export const incrementByAmountAsync = amount => dispatch => {
    setTimeout(() => {
       dispatch(incrementByAmount(amount));    
    },2000);
}

export default counterSlice.reducer;