import { configureStore } from "@reduxjs/toolkit";
import products from "./slices/products.slice.js";

const store = configureStore({
    reducer: {
        products,
    }
});

export default store;