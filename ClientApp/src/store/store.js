import { configureStore } from '@reduxjs/toolkit';
import counterSlice from '../features/counter/slice';

const rootReducer = {
    counter: counterSlice.reducer
}


export const store = configureStore({
    reducer: rootReducer,
});

