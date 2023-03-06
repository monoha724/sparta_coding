import { configureStore } from "@reduxjs/toolkit";
import { todoSlice } from "../moduels/todoModule";

export const store = configureStore({
    reducer: {
        todo: todoSlice.reducer
    },
})