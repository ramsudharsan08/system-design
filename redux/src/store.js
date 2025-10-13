import { configureStore } from "@reduxjs/toolkit";
import tasksReducer from './slices/taskSlices'

export const store = configureStore({
    reducer: {
        tasks :tasksReducer
    }
})