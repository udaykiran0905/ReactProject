import { configureStore } from "@reduxjs/toolkit";
import productReducer from './ProductSlice'
export const store=configureStore({reducer:{productItems:productReducer}})
console.log(store);
// console.log(productItems);