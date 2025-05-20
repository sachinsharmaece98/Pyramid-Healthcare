/* eslint-disable @typescript-eslint/no-explicit-any */
import { createAsyncThunk } from '@reduxjs/toolkit';
import config from '../../../config/server-config';
import axios from 'axios';

export const GetBlogPageDetail = createAsyncThunk('GetBlogPageDetail', async () => {
    const token = window.localStorage.getItem('token');

    try {
        const response = await axios.get(`${config.getBlogPageDetails}`, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
        return response.data.data;
    } catch (error) {
        console.log(error);
    }
});

export const GetBlogCategoryDetail = createAsyncThunk('GetBlogCategoryDetail', async () => {
    const token = window.localStorage.getItem('token');

    try {
        const response = await axios.get(`${config.getBlogCategoryDetails}`, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
        return response.data.data;
    } catch (error) {
        console.log(error);
    }
});

export const GetBlogTags = createAsyncThunk('GetBlogTags', async () => {
    const token = window.localStorage.getItem('token');

    try {
        const response = await axios.get(`${config.getBlogTags}`, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
        return response.data.data;
    } catch (error) {
        console.log(error);
    }
});

export const GetBlogViaId = createAsyncThunk('GetBlogViaId', async (id) => {
    const token = window.localStorage.getItem('token');

    try {
        const response = await axios.get(`${config.getBlogViaId}/${id}`, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
        return response.data.data;
    } catch (error) {
        console.log(error);
    }
});

export const GetBlogViaCategory = createAsyncThunk('GetBlogViaCategory', async (req) => {
    const token = window.localStorage.getItem('token');

    try {
        const response = await axios.get(`${config.getBlogViaCategory}/${req}`, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
        return response.data.data;
    } catch (error) {
        console.log(error);
    }
});

export const GetBlogViaTags = createAsyncThunk('GetBlogViaTags', async (id) => {
    const token = window.localStorage.getItem('token');

    try {
        const response = await axios.get(`${config.getBlogViaCategory}/${id}`, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
        return response.data.data;
    } catch (error) {
        console.log(error);
    }
});

export const GetBlogTitleSearch = createAsyncThunk('GetBlogTitleSearch', async (value) => {
    const token = window.localStorage.getItem('token');

    try {
        const response = await axios.get(`${config.getBlogTitleSearch}/${value}`, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
        return response.data.data;
    } catch (error) {
        console.log(error);
    }
});

export const GetBlogHomePageDetail = createAsyncThunk('GetBlogHomePageDetail', async () => {
    const token = window.localStorage.getItem('token');

    try {
        const response = await axios.get(`${config.getBlogDetailsForHome}`, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
        return response.data.data;
    } catch (error) {
        console.log(error);
    }
});