import { createSlice } from '@reduxjs/toolkit';
import { GetTrainingData, GetTrainingPageData } from './training-thunk';

const initialState = {
  loadingSubmit: false,
  loadingTrainingBanner: false,
  error: null,
  trainingDetailsData: [],
  trainingPageDetailsData: []
};

const trainingSlice = createSlice({
  name: 'trainingSlice',
  initialState,
  reducers: {
    resetData(state) {
      state.fileName = null;
    },
  },
  extraReducers: (builder) => {
    builder
      //Show data
      .addCase(GetTrainingData.pending, (state) => {
        state.loadingTrainingBanner = true;
        state.error = null;
      })
      .addCase(GetTrainingData.fulfilled, (state, action) => {
        state.loadingTrainingBanner = false;
        state.trainingDetailsData = action.payload;
      })
      .addCase(GetTrainingData.rejected, (state, action) => {
        state.loadingTrainingBanner = false;
        state.error = action.payload;
      })

      //PageDetail
      .addCase(GetTrainingPageData.pending, (state) => {
        state.loadingTrainingBanner = true;
        state.error = null;
      })
      .addCase(GetTrainingPageData.fulfilled, (state, action) => {
        state.loadingTrainingBanner = false;
        state.trainingPageDetailsData = action.payload;
      })
      .addCase(GetTrainingPageData.rejected, (state, action) => {
        state.loadingTrainingBanner = false;
        state.error = action.payload;
      });
  },
});
export const { resetData } = trainingSlice.actions;
export default trainingSlice.reducer; 
