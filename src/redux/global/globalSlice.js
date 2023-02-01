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
    openLogOutModal: (state) => {
      state.isModalLogoutOpen = true;
    },
    closeLogOutModal: (state) => {
      state.isModalLogoutOpen = false;
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
export const { openLogOutModal, closeLogOutModal, openModal, closeModal} = globalSlice.actions

