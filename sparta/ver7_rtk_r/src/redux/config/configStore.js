import { configureStore } from "@reduxjs/toolkit";
import { todoSlice } from "../modules/todoModule";

export const store = configureStore({
    reducer: {
        todo: todoSlice.reducer,
    },
    devTools:true
})