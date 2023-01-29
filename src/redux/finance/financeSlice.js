import { createSlice } from '@reduxjs/toolkit';
import { getCategories } from './financeOperations';


///////////////// Slice data ///////////////

const initialState = {
  //   totalBalance: "",
  // data: null,
  categories: [],
    
};

const financeSlice = createSlice({
  name: 'finance',
  initialState,
  extraReducers: builder => {
    builder.addCase(getCategories.fulfilled, (state, { payload }) => {
     state.categories = payload?.map(item => item.name);  
      
      // console.log(state.categories);
    });
  },
});

export const financeSliceReducer = financeSlice.reducer;

