import { createSlice } from '@reduxjs/toolkit';
import { GetGlobalDetails, GetFooterData } from './global-thunk';

const initialState = {
  loadingSubmit: false,
  loadingGlobalBanner: false,
  error: null,
  
  
  lstGlobalDetails: [],
  loadingFooterBanner: false,
  lstFooterDetails: []
};

const globalSlice = createSlice({
  name: 'globalSlice',
  initialState,
  reducers: {
    resetData(state) {
      state.fileName = null;
    },
  },
  extraReducers: (builder) => {
    builder
      //Show data
      .addCase(GetGlobalDetails.pending, (state) => {
        state.loadingGlobalBanner = true;
        state.error = null;
      })
      .addCase(GetGlobalDetails.fulfilled, (state, action) => {
        state.loadingGlobalBanner = false;
        state.lstGlobalDetails = action.payload;
      })
      .addCase(GetGlobalDetails.rejected, (state, action) => {
        state.loadingGlobalBanner = false;
        state.error = action.payload;
      })
      // Footer 
      .addCase(GetFooterData.pending, (state) => {
        state.loadingFooterBanner = true;
        state.error = null;
      })
      .addCase(GetFooterData.fulfilled, (state, action) => {
        state.loadingFooterBanner = false;
        state.lstFooterDetails = action.payload;
      })
      .addCase(GetFooterData.rejected, (state, action) => {
        state.loadingFooterBanner = false;
        state.error = action.payload;
      })
  },
});
export const { resetData } = globalSlice.actions;
export default globalSlice.reducer; 
