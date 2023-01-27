import { createSlice } from '@reduxjs/toolkit';


///////////////// Slice data ///////////////

const initialState = {
    totalBalance: "",
    data: null,
};

const financeSlice = createSlice({
  name: 'finance',
  initialState,
  extraReducers: builder => {
    // builder.addCase(getData.fulfilled, (state, { payload }) => {
    //     state.totalBalance = '';
    //     state.data = null;
    // });
  },
});

export const financeSliceReducer = financeSlice.reducer;

