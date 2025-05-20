import { createSlice } from '@reduxjs/toolkit';
import { GetHomeAllBanners } from './home-thunk';

const initialState = {
  loadingSubmit: false,
  loadingHomeBanner: false,
  error: null,

  lstBanner: [],
};

const homeSlice = createSlice({
  name: 'homeslice',
  initialState,
  reducers: {
    resetData(state) {
      state.fileName = null;
    },
  },
  extraReducers: (builder) => {
    builder
      //Show data
      .addCase(GetHomeAllBanners.pending, (state) => {
        state.loadingHomeBanner = true;
        state.error = null;
      })
      .addCase(GetHomeAllBanners.fulfilled, (state, action) => {
        state.loadingHomeBanner = false;
        state.lstBanner = action.payload;
      })
      .addCase(GetHomeAllBanners.rejected, (state, action) => {
        state.loadingHomeBanner = false;
        state.error = action.payload;
      });
  },
});
export const { resetData } = homeSlice.actions;
export default homeSlice.reducer; 
