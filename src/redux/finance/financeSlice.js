import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { toastAddTransactionError, toastAddTransactionSuccess } from 'components/Toast/Toast';
import {
  createTransaction,
  getCategories,
  getTransactions,
} from './financeOperations';

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

const handleRejected = (state, { payload }) => {
  state.isLoading = false;
  state.isError = true;
  toastAddTransactionError('Error adding transaction!');
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
      })
      .addCase(createTransaction.fulfilled, (state, { payload }) => {
        console.log(payload);
        toastAddTransactionSuccess('Success adding transaction!');
        // console.log('success!');
        state.transactions.push(payload);
      })
      .addCase(getTransactions.fulfilled, (state, { payload }) => {
        state.transactions = payload;
        // console.log(payload);
      })
      .addCase(createTransaction.rejected, (_, { payload }) => {
        console.log(payload);
        console.log('reject!');
      })
      .addMatcher(isAnyOf(...getOption('pending')), handlePending)
      .addMatcher(isAnyOf(...getOption('rejected')), handleRejected);
  },
});

export const financeSliceReducer = financeSlice.reducer;
