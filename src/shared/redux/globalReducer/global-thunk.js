/* eslint-disable @typescript-eslint/no-explicit-any */
import { createAsyncThunk } from '@reduxjs/toolkit';
import config from '../../../config/server-config';
import axios from 'axios';

export const GetGlobalDetails = createAsyncThunk('GetGlobalDetails', async () => {
    const token = window.localStorage.getItem('token');
    try {
        const response = await axios.get(`${config.GlobalData}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return response.data.data;
    } catch (error) {
      console.log(error);
    }
  });


  export const GetFooterData = createAsyncThunk('GetFooterData', async () => {
    const token = window.localStorage.getItem('token');
    try {
        const response = await axios.get(`${config.footerData}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return response.data.data;
    } catch (error) {
      console.log(error);
    }
  });