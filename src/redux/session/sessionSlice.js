import { createSlice } from '@reduxjs/toolkit';
import { logIn, logOut, refreshUser, register } from './sessionOperations';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import {
  toastRegisterSuccess,
  toastLoginSuccess,
} from 'components/Toast/Toast';

///////////////// Slice data ///////////////

const initialState = {
  user: null,
  token: null,
  // error: null,
  isAuth: false,
};


const sessionSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(register.fulfilled, (state, { payload }) => {
        toastRegisterSuccess(
          `Welcome to the Wallet, ${payload?.user.username}`
        );
        state.user = payload?.user;
        state.token = payload?.token;
        state.isAuth = true;
      })
      .addCase(logIn.fulfilled, (state, { payload }) => {
        toastLoginSuccess(`Wellcome back, ${payload?.user.username}`);
        state.user = payload?.user;
        state.token = payload?.token;
        state.isAuth = true;
      })
      .addCase(refreshUser.fulfilled, (state, { payload }) => {
        state.user = payload;
        state.isAuth = true;
      })
      .addCase(logOut.fulfilled, state => {
        state.user = null;
        state.isAuth = false;
        state.token = null;
      });
  },
});

const sessionSliceReducer = sessionSlice.reducer;

///////////////// Persist data ///////////////

const persistConfig = {
  key: 'token',
  version: 1,
  storage,
  whitelist: ['token'],
};
export const sessionSlicePersistedReducer = persistReducer(
  persistConfig,
  sessionSliceReducer
);
