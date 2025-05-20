import { createSlice } from '@reduxjs/toolkit';
import { GetAboutData } from './about-thunk';

const initialState = {
  loadingSubmit: false,
  loadingAboutBanner: false,
  error: null,

  aboutlstBanner: [],
};

const aboutSlice = createSlice({
  name: 'aboutSlice',
  initialState,
  reducers: {
    resetData(state) {
      state.fileName = null;
    },
  },
  extraReducers: (builder) => {
    builder
      //Show data
      .addCase(GetAboutData.pending, (state) => {
        state.loadingAboutBanner = true;
        state.error = null;
      })
      .addCase(GetAboutData.fulfilled, (state, action) => {
        state.loadingAboutBanner = false;
        state.aboutlstBanner = action.payload;
      })
      .addCase(GetAboutData.rejected, (state, action) => {
        state.loadingAboutBanner = false;
        state.error = action.payload;
      });
  },
});
export const { resetData } = aboutSlice.actions;
export default aboutSlice.reducer; 
