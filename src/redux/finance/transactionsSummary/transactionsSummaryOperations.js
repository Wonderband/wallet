import { createAsyncThunk } from '@reduxjs/toolkit';
import { auth, setAuthToken } from 'services/authAPI';

async function getTransactionsSummary({ month, year }, thunkAPI) {
  const state = thunkAPI.getState();
  const persistedToken = state.session.token;

  if (persistedToken === null) {
    return thunkAPI.rejectWithValue('Unable to fetch user');
  }

  try {
    setAuthToken(persistedToken);

    const { data } = await auth.get(
      `/api/transactions-summary?month=${month}&year=${year}`
    );
    console.log(data);
    return data; // destructured data or no?
  } catch (error) {
    thunkAPI.rejectWithValue(error.message);
  }
}

export const getSummary = createAsyncThunk(
  'finance/summary',
  getTransactionsSummary
);
