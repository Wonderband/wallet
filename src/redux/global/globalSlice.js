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
  extraReducers: builder => {
    // builder.addCase(getData.fulfilled, (state, { payload }) => {
    //      state.isLoading: true,
    //     ...
    // });
  },
});

export const globalSliceReducer = globalSlice.reducer;

