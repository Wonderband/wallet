import { createAsyncThunk } from '@reduxjs/toolkit';
import { authAPI, auth } from 'services/authAPI';
import { setAuthToken } from 'services/authAPI';
import { toast } from 'react-toastify';
import {
  toastInvalidPassword,
  toastInvalidUser,
  toastUserAlreadyExist,
} from 'components/Toast/Toast';
import { setBalance } from 'redux/finance/financeSlice';

export const register = createAsyncThunk(
  'auth/register',
  async (formData, thunkAPI) => {
    try {
      return await authAPI.registerUser(formData);
    } catch (error) {
      toastUserAlreadyExist(error.response.data.message);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logIn = createAsyncThunk(
  'auth/login',
  async (formData, thunkAPI) => {
    try {
      const response = await auth.post('/api/auth/sign-in', formData);
      setAuthToken(response.data.token);
      thunkAPI.dispatch(setBalance(response.data.user.balance));
      return response.data;
    } catch (error) {
      Number(error.response.status) === 404 &&
        toastInvalidUser(error.response.data.message);
      Number(error.response.status) === 403 &&
        toastInvalidPassword(error.response.data.message);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logOut = createAsyncThunk('auth/logout', async (_, thunkAPI) => {
  try {
    return await authAPI.logoutUser();
  } catch (error) {
    toast.error(error.response.data.message);
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const refreshUser = createAsyncThunk(
  'auth/refresh',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.session.token;

    if (persistedToken === null) {
      return thunkAPI.rejectWithValue('Unable to fetch user');
    }

    try {
      setAuthToken(persistedToken);
      const response = await auth('/api/users/current');
      thunkAPI.dispatch(setBalance(response.data.balance));
      return response.data;
    } catch (error) {
      toast.error(error.response.data.message);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
