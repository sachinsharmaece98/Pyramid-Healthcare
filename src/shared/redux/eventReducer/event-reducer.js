import { createSlice } from '@reduxjs/toolkit';
import { GetEventDetails } from './event-thunk';

const initialState = {
  loadingSubmit: false,
  loadingEventBanner: false,
  error: null,
  
  lstEventDetails: [],
  lstEventPopupData: []
};

const eventSlice = createSlice({
  name: 'eventSlice',
  initialState,
  reducers: {
    resetData(state) {
      state.fileName = null;
    },
  },
  extraReducers: (builder) => {
    builder
      //Show data
      .addCase(GetEventDetails.pending, (state) => {
        state.loadingEventBanner = true;
        state.error = null;
      })
      .addCase(GetEventDetails.fulfilled, (state, action) => {
        state.loadingEventBanner = false;
        state.lstEventDetails = action.payload;
        state.lstEventPopupData = action.payload?.events_details?.filter((items) => {
          if (items.event_end_date) {
            const endDate = new Date(items.event_end_date)
            const today = new Date();
            if (endDate > today) {
              return items.event_popup_images;
            }
          }
        }).map((item) => item.event_popup_images)
      })
      .addCase(GetEventDetails.rejected, (state, action) => {
        state.loadingEventBanner = false;
        state.error = action.payload;
      })
  },
});
export const { resetData } = eventSlice.actions;
export default eventSlice.reducer; 
