import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    randomnumber: 0,
}

export const randomnumberSlice = createSlice({
    name: "randomnumber",
    initialState,
    reducers: {
        generateNumber: (state, action) => {
            const digits = action.payload;
            const range = Math.pow(10, digits-1);
            const newNumber = Math.floor(range + Math.random() * 9*range);
            state.randomnumber = newNumber;
        }
    }
})
export const { generateNumber } = randomnumberSlice.actions;
export default randomnumberSlice.reducer;