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
    },
    openModal: {
      reducer(state) {         
        state.isModalAddTransactionOpen = true;
      }
    },
    closeModal: {
      reducer(state) {         
        state.isModalAddTransactionOpen = false;
      }
    },
  },
  // extraReducers: builder => {
  //   // builder.addCase(getData.fulfilled, (state, { payload }) => {
  //   //      state.isLoading: true,
  //   //     ...
  //   // });
  // },
    
});

export const globalSliceReducer = globalSlice.reducer;
export const { logOut, openModal, closeModal} = globalSlice.actions

