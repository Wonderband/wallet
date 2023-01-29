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
  }
});

export const globalSliceReducer = globalSlice.reducer;
export const { openModal, closeModal} = globalSlice.actions

