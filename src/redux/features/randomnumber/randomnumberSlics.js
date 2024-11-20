import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    randomnumber: 0,
}

export const randomnumberSlice = createSlice({
    name: "randomnumber",
    initialState,
    reducers: {
        generateNumber: (state, action) => {
            let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
            
            let newRandom = "";
            for (let i = 0; i < action.payload; i++) {
                let position = Math.floor(Math.random() * str.length);
                newRandom += str.charAt(position);
            }
            state.randomnumber = newRandom;
        }
    }
})
export const { generateNumber } = randomnumberSlice.actions;
export default randomnumberSlice.reducer;