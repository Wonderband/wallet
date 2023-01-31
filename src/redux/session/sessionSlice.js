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
  isLoading: false,
};

const pending = state => {
  state.isLoading = true;
};

const rejected = state => {
  state.isLoading = false;
};

const sessionSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(register.pending, pending)
      .addCase(register.rejected, rejected)
      .addCase(logIn.pending, pending)
      .addCase(logIn.rejected, rejected)
      .addCase(refreshUser.pending, pending)
      .addCase(refreshUser.rejected, rejected)
      .addCase(logOut.pending, pending)
      .addCase(logOut.rejected, rejected)
      .addCase(register.fulfilled, (state, { payload }) => {
        toastRegisterSuccess(
          `Wellcome to the Wallet, ${payload?.user.username}`
        );
        state.user = payload?.user;
        state.token = payload?.token;
        state.isAuth = true;
        state.isLoading = false;
      })
      .addCase(logIn.fulfilled, (state, { payload }) => {
        toastLoginSuccess(`Wellcome back, ${payload?.user.username}`);
        state.user = payload?.user;
        state.token = payload?.token;
        state.isAuth = true;
        state.isLoading = false;
      })
      .addCase(refreshUser.fulfilled, (state, { payload }) => {
        state.user = payload;
        state.isAuth = true;
        state.isLoading = false;
      })
      .addCase(logOut.fulfilled, (state, { payload }) => {
        state.user = null;
        state.isAuth = false;
        state.isLoading = false;
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
