/* eslint-disable @typescript-eslint/no-explicit-any */
import { createAsyncThunk } from '@reduxjs/toolkit';
import config from '../../../config/server-config';
import axios from 'axios';

export const GetContactPageDetails = createAsyncThunk('GetContactPageDetails', async () => {
    const token = window.localStorage.getItem('token');
    try {
        const response = await axios.get(`${config.getContactPageDetails}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return response.data.data;
    } catch (error) {
      console.log(error);
    }
  });
  
  export const SubmitContactFormDetails = createAsyncThunk('SubmitContactFormDetails', async (req) => {
    const token = window.localStorage.getItem('token');
    try {
      const response = await axios.post(`${config.submitContactForm}`, { ...req } , {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return response.data.data;
    } catch (error) {
      console.log('erro',error);
    }
  });