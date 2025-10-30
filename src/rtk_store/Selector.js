import { createSelector } from '@reduxjs/toolkit';
export const selectCartItems = state => state.productItems.Data;
export const selectCartTotalItems = createSelector(
[selectCartItems],
  items => items.reduce((sum, i) => sum + (i.quantity || 0), 0)
);