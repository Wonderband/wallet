import { createAsyncThunk } from '@reduxjs/toolkit';
import { closeModal } from 'redux/global/globalSlice';
import { auth, setAuthToken } from 'services/authAPI';

async function getAllCategories(_, thunkAPI) {
  const state = thunkAPI.getState();
  const persistedToken = state.session.token;
  try {
    setAuthToken(persistedToken);
    const res = await auth.get('/api/transaction-categories');
    return res.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
}

async function createNewTransaction(transData, thunkAPI) {
  try {
    // console.log(transData);
    const res = await auth.post('/api/transactions', transData);
    thunkAPI.dispatch(closeModal());
    return res.data;
  } catch (error) {
    console.log('error!');
    return thunkAPI.rejectWithValue(error.message);
  }
}

async function editTransactionById(transData, thunkAPI) {
  try {
    const transactionId = transData.id
    delete transData.id
    const res = await auth.patch(`/api/transactions/${transactionId}`, transData);
    return res.data;
  } catch (error) {
    console.log(error);
    return thunkAPI.rejectWithValue(error.message);
  }
}

async function deleteTransactionById(data, thunkAPI) {
  try {
    await auth.delete(`/api/transactions/${data.id}`);
    return data;
  } catch (error) {
    console.log(error);
    return thunkAPI.rejectWithValue(error.message);
  }
}

async function getAllTransactions(_, thunkAPI) {
  const state = thunkAPI.getState();
  const persistedToken = state.session.token;
  try {
    setAuthToken(persistedToken);
    const res = await auth.get('/api/transactions');
    // console.log(res.data);
    return res.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
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

export const editTransaction = createAsyncThunk(
  'finance/editTransaction',
  editTransactionById
);

export const deleteTransaction = createAsyncThunk(
  'finance/deleteTransaction',
  deleteTransactionById
);

export const getTransactions = createAsyncThunk(
  'finance/getTransactions',
  getAllTransactions
);
