import { createAsyncThunk } from '@reduxjs/toolkit';
import { auth } from 'services/authAPI';

async function getTransactionsSummary({ month, year }, thunkAPI) {
  try {
    const { data } = await auth.get(
      `/api/transactions-summary?month=${month}&year=${year}`
    );
    return data; // destructured data or no?
  } catch (error) {
    thunkAPI.rejectWithValue(error.message);
  }
}

export const getSummary = createAsyncThunk(
  'finance/summary',
  getTransactionsSummary
);
