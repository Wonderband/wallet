import { createAsyncThunk } from '@reduxjs/toolkit';
import { authAPI } from 'services/authAPI';
import { setAuthToken } from 'services/authAPI';
import { toast } from 'react-toastify';

export const register = createAsyncThunk(
  'auth/register',
  async (formData, thunkAPI) => {
    try {
      return await authAPI.registerUser(formData);
    } catch (error) {
      toast.error(error.response.data.message);
      thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logIn = createAsyncThunk(
  'auth/login',
  async (formData, thunkAPI) => {
    try {
      return await authAPI.loginUser(formData);
    } catch (error) {
      thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logOut = createAsyncThunk('auth/logout', async (_, thunkAPI) => {
  try {
    return await authAPI.logOut();
  } catch (error) {
    thunkAPI.rejectWithValue(error);
  }
});

export const refreshUser = createAsyncThunk(
  'auth/refresh',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;

    if (persistedToken === null) {
      return thunkAPI.rejectWithValue('Unable to fetch user');
    }

    try {
      setAuthToken(persistedToken);
      return await authAPI.refreshUser();
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
