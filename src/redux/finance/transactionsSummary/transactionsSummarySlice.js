import { createSlice } from '@reduxjs/toolkit';
import { getSummary } from './transactionsSummaryOperations';

const transactionsSummarySlice = createSlice({
  name: 'transactions',
  initialState: {
    summary: [],
    expenseSummary: null,
    incomeSummary: null,
    error: null,
  },

  extraReducers: builder => {
    builder
      .addCase(getSummary.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getSummary.fulfilled, (state, { payload }) => {
        state.summary = payload.categoriesSummary;
        state.expenseSummary = payload.expenseSummary;
        state.incomeSummary = payload.incomeSummary;
      })
      .addCase(getSummary.rejected, (state, { payload }) => {
        state.error = payload;
      });
  },
});

export const transactionsSummaryReducer = transactionsSummarySlice.reducer;
