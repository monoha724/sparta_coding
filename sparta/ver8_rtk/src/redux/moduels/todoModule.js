import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        newTodo: (state, {payload}) => {
            state.push({
                id: state.length + 1,
                title: payload.title,
                content: payload.content,
                isDone: false,
                edit: false,
            })
        },

        doneState: (state, {payload}) => {
            return state.map((item) => item.id === payload ? {...item, isDone: !item.isDone} : item)
        },

        deleteTodo: (state, {payload}) => {
            return state.filter((item) => payload !== item.id);
        },

        editState: (state, {payload}) => {
            return state.map((item) => item.id === payload ? {...item, edit: !item.edit} : item);
        },

        fixTodo: (state, {payload}) => {
            return state.map((item) => item.id === payload.id ? {...item, title: payload.title, content: payload.content, edit: !item.edit} : item);
        },
    }
})

export const { newTodo, doneState, deleteTodo, editState, fixTodo } = todoSlice.actions;
export default todoSlice.reducer;