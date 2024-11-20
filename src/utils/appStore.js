import { configureStore } from "@reduxjs/toolkit";

// If we use the default export we can give whatever name we want while import, this will also work > import shivam from "./cartSlice";
import cartReducer from "./cartSlice";

const appStore = configureStore({
    reducer: {
        cart: cartReducer
    }
});

export default appStore;