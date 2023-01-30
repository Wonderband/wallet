import { createSlice } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import { createTransaction, getCategories, getTransactions } from './financeOperations';

///////////////// Slice data ///////////////

const initialState = {
  //   totalBalance: "",
  categories: [],
  transactions: [],
};



const financeSlice = createSlice({
  name: 'finance',
  initialState,
  extraReducers: builder => {
    builder.addCase(getCategories.fulfilled, (state, { payload }) => {
      state.categories = payload?.map(item => { return { name: item.name, id: item.id } });     
          }) 
      .addCase(createTransaction.fulfilled, (state, { payload }) => {
        console.log(payload);
        state.transactions.push(payload);        
      })
    .addCase(getTransactions.fulfilled, (state, { payload }) => {        
        state.transactions = payload;        
          })
  },
});

export const financeSliceReducer = financeSlice.reducer;
