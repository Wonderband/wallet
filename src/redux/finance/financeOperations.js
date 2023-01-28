import { createAsyncThunk } from '@reduxjs/toolkit';
import { auth } from 'services/authAPI';

// import { financeAPI} from 'services/financeAPI';

async function getAllCategories(_, thunkAPI) {  
  try {
    return await auth.get('/api/transaction-categories');
    // return categories;
  } catch (error) {
    thunkAPI.rejectWithValue(error.message);
  }
}

export const getCategories = createAsyncThunk(
  'finance/categories',
  getAllCategories
);
