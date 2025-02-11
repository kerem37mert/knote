import { createSlice } from "@reduxjs/toolkit";

const langInitialState = {
    value: "tr"
}

const langSlice = createSlice({
    name: "lang",
    initialState: langInitialState,
    reducers: {
        changeLang: function(state, action) {
            state.value = action.payload;
        }
    }
});

export const langActons = langSlice.actions;

export default langSlice;