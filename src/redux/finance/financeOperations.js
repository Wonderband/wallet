import { createAsyncThunk } from '@reduxjs/toolkit';
import { closeModal } from 'redux/global/globalSlice';
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
    const res = await auth.post('/api/transactions', transData);    
     thunkAPI.dispatch(closeModal());
    return res.data;
  } catch (error) {
    thunkAPI.rejectWithValue(error.message);
  }
}

async function getAllTransactions(_, thunkAPI) {
  try {   
    const res = await auth.get('/api/transactions');  
    return res.data;
  } catch (error) {
    thunkAPI.rejectWithValue(error.message);
  }
}

export const getCategories = createAsyncThunk(
  'finance/getCategories',
  getAllCategories
);

export const createTransaction = createAsyncThunk(
  'finance/createTransaction',
  createNewTransaction
);

export const getTransactions = createAsyncThunk(
  'finance/getTransactions',
  getAllTransactions
);
