/* eslint-disable @typescript-eslint/no-explicit-any */
import { createAsyncThunk } from '@reduxjs/toolkit';
import config from '../../../config/server-config';
import axios from 'axios';

export const GetProductList = createAsyncThunk('GetProductList', async () => {
    const token = window.localStorage.getItem('token');
    try {
        const response = await axios.get(`${config.getProductList}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return response.data.data;
    } catch (error) {
      console.log(error);
    }
  });
  
  export const GetProductAllData = createAsyncThunk('GetProductAllData', async (slug) => {
    const token = window.localStorage.getItem('token');
    try {
      console.log('getprod', config.getProductAllData, slug)
      const response = await axios.get(`${config.getProductAllData}/${slug}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return response.data.data;
    } catch (error) {
      console.log('erro',error);
    }
  });