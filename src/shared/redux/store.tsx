import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import homeReducer from './homeReducer/home-reducer';
import productReducer from './productReducer/productReducer';
import contactReducer from './contactReducer/contactReduce';
import eventReducer from './eventReducer/event-reducer';
import aboutReducer from './aboutReducer/aboutReducer';
import teamReducer from './teamReducer/teamReducer';
import treatmentReducer from "./treatmentReducer/treatmentReducer";
import trainingReducer from "./trainingReducer/trainingReducer";
import blogReducer from "./BlogReducer/blogReducer";
import globalReducer from "./globalReducer/globalReducer";

export const store = configureStore({
  reducer: {
    homeslice: homeReducer,
    productSlice: productReducer,
    contactSlice: contactReducer,
    eventSlice: eventReducer,
    aboutSlice: aboutReducer,
    teamSlice: teamReducer,
    treatmentSlice: treatmentReducer,
    trainingSlice: trainingReducer,
    blogSlice: blogReducer,
    globalSlice: globalReducer
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>;

export default store;

