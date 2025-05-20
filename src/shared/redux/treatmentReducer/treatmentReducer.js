import { createSlice } from '@reduxjs/toolkit';
import { GetTreatmentData } from './treatment-thunk';

const initialState = {
  loadingSubmit: false,
  loadingTreatmentBanner: false,
  error: null,
  lstBanner: [],
};

const treatmentSlice = createSlice({
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
      .addCase(GetTreatmentData.pending, (state) => {
        state.loadingTreatmentBanner = true;
        state.error = null;
      })
      .addCase(GetTreatmentData.fulfilled, (state, action) => {
        state.loadingTreatmentBanner = false;
        state.lstBanner = action.payload;
      })
      .addCase(GetTreatmentData.rejected, (state, action) => {
        state.loadingTreatmentBanner = false;
        state.error = action.payload;
      })
  },
});
export const { resetData } = treatmentSlice.actions;
export default treatmentSlice.reducer; 
