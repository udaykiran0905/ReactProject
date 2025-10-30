
import { createSlice } from '@reduxjs/toolkit';
const productSlice = createSlice({
  name: "productSliceData",
  initialState: { Data: [] },
  reducers: {
    addToCart: (state, action) => {
      const existingItem = state.Data.find(item => item.id === action.payload.id);
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.Data.push({ ...action.payload, quantity: 1 });
      }
    },
    incrementQuantity: (state, action) => {
      const item = state.Data.find(item => item.id === action.payload);
      if (item) {
        item.quantity += 1;
      }
    },
    decrementQuantity: (state, action) => {
      const item = state.Data.find(item => item.id === action.payload);
      if (item) {
        item.quantity -= 1;
        if (item.quantity <= 0) {
          state.Data = state.Data.filter(i => i.id !== action.payload);
        }
      }
    },
    removeFromCart: (state, action) => {
      state.Data = state.Data.filter(item => item.id !== action.payload);
    }
  }
});

console.log("productslice", productSlice);
export default productSlice.reducer;
export const { addToCart, incrementQuantity, decrementQuantity, removeFromCart } = productSlice.actions;