import { createSlice } from '@reduxjs/toolkit';


///////////////// Slice data ///////////////

const initialState = {
    isLoading: false,
    isModalLogoutOpen: false,
    isModalAddTransactionOpen: false,
};

const globalSlice = createSlice({
  name: 'global',
  initialState,
  reducers: {
    logOut: (state) => {
      state.isModalLogoutOpen = true;
    }
  },
  extraReducers: builder => {
    // builder.addCase(getData.fulfilled, (state, { payload }) => {
    //      state.isLoading: true,
    //     ...
    // });
  },
});

export const {logOut} = globalSlice.actions;

export const globalSliceReducer = globalSlice.reducer;

