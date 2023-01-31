import { createSlice } from '@reduxjs/toolkit';
import { createTransaction, getCategories } from './financeOperations';

///////////////// Slice data ///////////////

const initialState = {
  //   totalBalance: "",
  // data: null,
  categories: [],
  transactions: [],
};

const financeSlice = createSlice({
  name: 'finance',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(getCategories.fulfilled, (state, { payload }) => {
        state.categories = payload?.map(item => {
          return { name: item.name, id: item.id };
        });
        // console.log(state.categories);
      })
      .addCase(createTransaction.fulfilled, (state, { payload }) => {
        console.log(payload);
        state.transactions.push(payload);
        // console.log(state.transactions);
      });
  },
});

export const financeSliceReducer = financeSlice.reducer;
