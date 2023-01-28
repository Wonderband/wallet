import { createAsyncThunk } from '@reduxjs/toolkit';
import { auth } from 'services/authAPI';

async function getAllCategories(_, thunkAPI) {  
  try {
  const res =  await auth.get('/api/transaction-categories');
    return res;
  } catch (error) {
    thunkAPI.rejectWithValue(error.message);
  }
}

export const getCategories = createAsyncThunk(
  'finance/categories',
  getAllCategories
);
