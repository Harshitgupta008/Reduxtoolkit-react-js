import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getAllData = createAsyncThunk("fetchdata", async () => {
    const response = await fetch('https://fakestoreapi.com/products');
    const result = response.json();
    return result;
})

const initialState = {
    users: [],
    loading: false,
    error: null
};

export const fetchdataSlice = createSlice({
    name: "fetchdata",
    initialState,
    extraReducers: (builder) => {
        builder
            .addCase(getAllData.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(getAllData.fulfilled, (state, action) => {
                state.loading = false;
                state.users = action.payload;
            })
            .addCase(getAllData.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message; // Handle error message
            });
    },
})
export default fetchdataSlice.reducer;