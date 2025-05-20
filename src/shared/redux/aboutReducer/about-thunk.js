/* eslint-disable @typescript-eslint/no-explicit-any */
import { createAsyncThunk } from '@reduxjs/toolkit';
import config from '../../../config/server-config';
import axios from 'axios';

export const GetAboutData = createAsyncThunk('GetAboutData', async () => {
    const token = window.localStorage.getItem('token');
  
    try {
      const response = await axios.get(`${config.getAboutData}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return response.data.data;
    } catch (error) {
      console.log(error);
    }
  });