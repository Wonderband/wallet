import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { createTransaction, getCategories, getTransactions } from './financeOperations';

///////////////// Slice data ///////////////

const initialState = {
  //   totalBalance: "",
  categories: [],
  transactions: [],
  isLoading: false,
  isError: false,

};

const options = [getCategories, createTransaction, getTransactions];
const getOption = status => options.map(option => option[status]);

const handlePending = state => {
  state.isLoading = true;
  state.isError = false;
};

const handleRejected = (state, { payload}) => {
  state.isLoading = false; 
  state.isError = true;
  console.log(payload);
};

const financeSlice = createSlice({
  name: 'finance',
  initialState,
  extraReducers: builder => {
    builder.addCase(getCategories.fulfilled, (state, { payload }) => {
      state.categories = payload?.map(item => { return { name: item.name, id: item.id } });     
          }) 
      .addCase(createTransaction.fulfilled, (state, { payload }) => {
        // console.log(payload);
        state.transactions.push(payload);        
      })
    .addCase(getTransactions.fulfilled, (state, { payload }) => {        
      state.transactions = payload;   
      console.log(payload);
    })
    .addMatcher(isAnyOf(...getOption('pending')), handlePending)      
    .addMatcher(isAnyOf(...getOption('rejected')), handleRejected)   
  },
});

export const financeSliceReducer = financeSlice.reducer;







