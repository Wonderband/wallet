import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import {
  toastAddTransactionError,
  toastAddTransactionSuccess,
} from 'components/Toast/Toast';
import {
  createTransaction,
  deleteTransaction,
  editTransaction,
  getCategories,
  getTransactions,
} from './financeOperations';

///////////////// Slice data ///////////////

const initialState = {
  totalBalance: 0,
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
        state.totalBalance = payload.balanceAfter;
        console.log(payload.balanceAfter);
        state.transactions = [payload, ...state.transactions];
      })
      .addCase(getTransactions.fulfilled, (state, { payload }) => {
        state.transactions = payload;

        // console.log(payload);
      })
      .addCase(createTransaction.rejected, (_, { payload }) => {
        console.log(payload);
        console.log('reject!');
      })
      .addCase(editTransaction.fulfilled, (state, { payload }) => {
        toastAddTransactionSuccess('Success editing transaction!');
      })
      .addCase(deleteTransaction.fulfilled, (state, { payload }) => {
        let {id, sum, type} = payload
        toastAddTransactionSuccess('Success deleting transaction!');
        if (type === 'EXPENSE') {
          sum *= -1
        }
        state.totalBalance = state.totalBalance + sum;
        state.transactions = state.transactions.filter(el => el.id !== id)
      })
      .addMatcher(isAnyOf(...getOption('pending')), handlePending)
      .addMatcher(isAnyOf(...getOption('rejected')), handleRejected);
  },
});

export const financeSliceReducer = financeSlice.reducer;
