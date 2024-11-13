import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    todo: [],
}

export const todoSlice = createSlice({
    name: "todo",
    initialState,
    reducers: {
        AddData: (state, action) => {
            const newdata = action.payload;
            state.todo.push(newdata);
        },
        RemoveData: (state, action) => {
            state.todo = state.todo.filter((todo, id) => {
                return id !== action.payload
            })
        }
    }
})
export const { AddData, RemoveData } = todoSlice.actions;
export default todoSlice.reducer;