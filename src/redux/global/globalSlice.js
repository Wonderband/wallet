import { createSlice, isAnyOf, isAsyncThunkAction } from '@reduxjs/toolkit';
import { getSummary } from 'redux/finance/transactionsSummary/transactionsSummaryOperations';
import { logIn, logOut, refreshUser, register } from 'redux/session/sessionOperations';
import {getCategories, createTransaction, getTransactions} from '../finance/financeOperations';

///////////////// Slice data ///////////////

const initialState = {
    isLoading: false,
    isModalLogoutOpen: false,
    isModalAddTransactionOpen: false,
};

const options = [getCategories, createTransaction, getTransactions, getSummary, register, logIn, logOut, refreshUser];
const getOption = status => options.map(option => option[status]);

const handlePending = state => {
  state.isLoading = true;
};

const handleStopLoading = (state) => {
  state.isLoading = false;
};

const globalSlice = createSlice({
  name: 'global',
  initialState,
  reducers: {
    openLogOutModal: (state) => {
      state.isModalLogoutOpen = true;
    },
    closeLogOutModal: (state) => {
      state.isModalLogoutOpen = false;
    },
    openModal: {
      reducer(state) {         
        state.isModalAddTransactionOpen = true;
      }
    },
    closeModal: {
      reducer(state) {         
        state.isModalAddTransactionOpen = false;
      }
    },
  },
  extraReducers: builder => {builder
    .addMatcher(isAnyOf(...getOption('pending')), handlePending)
    .addMatcher(isAnyOf(...getOption('rejected')), handleStopLoading)
    .addMatcher(isAnyOf(...getOption('fulfilled')), handleStopLoading)
  },
    
});

export const globalSliceReducer = globalSlice.reducer;
export const { openLogOutModal, closeLogOutModal, openModal, closeModal} = globalSlice.actions

