import { createSlice } from '@reduxjs/toolkit';
import { GetTeamData } from './team-thunk';

const initialState = {
  loadingSubmit: false,
  loadingTeamBanner: false,
  error: null,

  lstBanner: [],
};

const teamSlice = createSlice({
  name: 'teamSlice',
  initialState,
  reducers: {
    resetData(state) {
      state.fileName = null;
    },
  },
  extraReducers: (builder) => {
    builder
      //Show data
      .addCase(GetTeamData.pending, (state) => {
        state.loadingTeamBanner = true;
        state.error = null;
      })
      .addCase(GetTeamData.fulfilled, (state, action) => {
        state.loadingTeamBanner = false;
        state.lstBanner = action.payload;
      })
      .addCase(GetTeamData.rejected, (state, action) => {
        state.loadingTeamBanner = false;
        state.error = action.payload;
      });
  },
});
export const { resetData } = teamSlice.actions;
export default teamSlice.reducer; 
