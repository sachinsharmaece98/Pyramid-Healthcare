import { createSlice } from '@reduxjs/toolkit';
import { GetProductList, GetProductAllData } from './product-thunk';

const initialState = {
  loadingSubmit: false,
  loadingProductBanner: false,
  error: null,

  lstProductBanner: [],
  productData: null
};

const productSlice = createSlice({
  name: 'productSlice',
  initialState,
  reducers: {
    resetData(state) {
      state.fileName = null;
    },
  },
  extraReducers: (builder) => {
    builder
      //Show data
      .addCase(GetProductList.pending, (state) => {
        state.loadingProductBanner = true;
        state.error = null;
      })
      .addCase(GetProductList.fulfilled, (state, action) => {
        state.loadingProductBanner = false;
        state.lstProductBanner = action.payload;
      })
      .addCase(GetProductList.rejected, (state, action) => {
        state.loadingProductBanner = false;
        state.error = action.payload;
      })
      
      .addCase(GetProductAllData.pending, (state) => {
        state.loadingProductBanner = true;
        state.error = null;
      })
      .addCase(GetProductAllData.fulfilled, (state, action) => {
        state.loadingProductBanner = false;
        state.productData = action.payload;
      })
      .addCase(GetProductAllData.rejected, (state, action) => {
        state.loadingProductBanner = false;
        state.error = action.payload;
      });
  },
});
export const { resetData } = productSlice.actions;
export default productSlice.reducer; 
