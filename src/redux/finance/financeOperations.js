import { createAsyncThunk } from '@reduxjs/toolkit';
import { auth } from 'services/authAPI';

async function getAllCategories(_, thunkAPI) {
  try {
    const res = await auth.get('/api/transaction-categories');
    return res.data;
  } catch (error) {
    thunkAPI.rejectWithValue(error.message);
  }
}

async function createNewTransaction(transData, thunkAPI) {
  try {
    // console.log(transData);
    const res = await auth.post('/api/transactions', transData);
    console.log(res);
    return res.data;
  } catch (error) {
    thunkAPI.rejectWithValue(error.message);
  }
}

export const getCategories = createAsyncThunk(
  'finance/categories',
  getAllCategories
);

export const createTransaction = createAsyncThunk(
  'finance/createTransaction',
  createNewTransaction
);
