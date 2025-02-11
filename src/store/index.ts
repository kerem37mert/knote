import { configureStore } from "@reduxjs/toolkit";
import langSlice from "./Lang";

const store = configureStore({
    reducer: {
        lang: langSlice.reducer
    }
});

export default store;