import { createSlice } from '@reduxjs/toolkit';
import { logIn, logOut, refreshUser, register } from './sessionOperations';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

///////////////// Slice data ///////////////

const initialState = {
  user: null,
  token: null,
  error: null,
  isAuth: false,
};

const sessionSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder => {
    builder.addCase(register.fulfilled, (state, { payload }) => {
      state.user = payload.user;
      state.token = payload.token;
      state.isAuth = true;
      state.error = null;
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
