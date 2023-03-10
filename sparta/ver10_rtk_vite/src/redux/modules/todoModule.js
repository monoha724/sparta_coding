import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const __getTodos = createAsyncThunk(
    "getTodos",
    async (payload, thunkAPI)=>{
        try {
            const result = await axios.get('http://localhost:4000/todos');
            thunkAPI.fulfillWithValue(result.data);
            console.log(result.data);
        } catch(error) {
            console.log('error', error);
            thunkAPI.rejectWithValue(error);
        }
        
    }
);

const initialState = {
    todos: [],
    isLoading: false,
    isError: false,
    error: null,
};

export const todosSlice = createSlice({
    name: "todos",
    initialState,
    reducers: {},
    extraReducers: {
        [__getTodos.pending]: (state, action) => {
            state.isLoading = true;
            state.isError = false;
        },
        [__getTodos.fulfilled]: (state, action) => {
            state.isLoading = false;
            state.isError = false;
            state.todos = action.payload;
        },
        [__getTodos.rejected]: (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.error = action.payload;
        }
    },
})

export const {} = todosSlice.actions;
export default todosSlice.reducer;