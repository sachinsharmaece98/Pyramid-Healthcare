import { createSlice } from '@reduxjs/toolkit';
import { GetContactPageDetails, SubmitContactFormDetails } from './contact-thunk';

const initialState = {
  loadingSubmit: false,
  loadingContactBanner: false,
  error: null,
  
  lstContactBanner: [],
  productData: null
};

const contactSlice = createSlice({
  name: 'contactSlice',
  initialState,
  reducers: {
    resetData(state) {
      state.fileName = null;
    },
  },
  extraReducers: (builder) => {
    builder
      //Show data
      .addCase(GetContactPageDetails.pending, (state) => {
        state.loadingContactBanner = true;
        state.error = null;
      })
      .addCase(GetContactPageDetails.fulfilled, (state, action) => {
        state.loadingContactBanner = false;
        state.lstContactBanner = action.payload;
      })
      .addCase(GetContactPageDetails.rejected, (state, action) => {
        state.loadingContactBanner = false;
        state.error = action.payload;
      })
      
      .addCase(SubmitContactFormDetails.pending, (state) => {
        state.loadingContactBanner = true;
        state.error = null;
      })
      .addCase(SubmitContactFormDetails.fulfilled, (state, action) => {
        state.loadingContactBanner = false;
        state.productData = action.payload;
      })
      .addCase(SubmitContactFormDetails.rejected, (state, action) => {
        state.loadingContactBanner = false;
        state.error = action.payload;
      });
  },
});
export const { resetData } = contactSlice.actions;
export default contactSlice.reducer; 
