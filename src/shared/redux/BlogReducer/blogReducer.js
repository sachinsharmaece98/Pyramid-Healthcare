import { createSlice } from '@reduxjs/toolkit';
import {
    GetBlogCategoryDetail,
    GetBlogPageDetail,
    GetBlogTags,
    GetBlogTitleSearch,
    GetBlogViaCategory,
    GetBlogViaId,
    GetBlogViaTags,
    GetBlogHomePageDetail
} from './blog-thunk';

const initialState = {
    loadingSubmit: false,
    loadingBlogBanner: false,
    error: null,
    isSelectedCategory: 0,
    isSelectedTag: 0,
    blogDetailsData: {},
    blogCategoryDetails: [],
    blogTagsData: [],
    blogViaIdData: [],
    blogViaCategoryData: [],
    blogViaTagsData: [],
    blogTitleSearchData: [],


    blogHomeTitildata: [],
    loadingHomeBlogBanner: false,
};

const blogSlice = createSlice({
    name: 'blogSlice',
    initialState,
    reducers: {
        resetData(state) {
            state.fileName = null;
        },
        highLightCategory(state, action) {
            state.isSelectedCategory = action?.payload;
        },
        hightLightTags(state, action) {
            state.isSelectedTag = action?.payload;
        }
    },
    extraReducers: (builder) => {
        builder
            //GetBlogPageDetail
            .addCase(GetBlogPageDetail.pending, (state) => {
                state.loadingBlogBanner = true;
                state.error = null;
            })
            .addCase(GetBlogPageDetail.fulfilled, (state, action) => {
                state.loadingBlogBanner = false;
                state.blogDetailsData = action.payload;
            })
            .addCase(GetBlogPageDetail.rejected, (state, action) => {
                state.loadingBlogBanner = false;
                state.error = action.payload;
            })

            //GetBlogCategoryDetail
            .addCase(GetBlogCategoryDetail.pending, (state) => {
                state.loadingBlogBanner = true;
                state.error = null;
            })
            .addCase(GetBlogCategoryDetail.fulfilled, (state, action) => {
                state.loadingBlogBanner = false;
                state.blogCategoryDetails = action.payload;
            })
            .addCase(GetBlogCategoryDetail.rejected, (state, action) => {
                state.loadingBlogBanner = false;
                state.error = action.payload;
            })

            //GetBlogTags
            .addCase(GetBlogTags.pending, (state) => {
                state.loadingBlogBanner = true;
                state.error = null;
            })
            .addCase(GetBlogTags.fulfilled, (state, action) => {
                state.loadingBlogBanner = false;
                state.blogTagsData = action.payload;
            })
            .addCase(GetBlogTags.rejected, (state, action) => {
                state.loadingBlogBanner = false;
                state.error = action.payload;
            })

            //GetBlogViaId
            .addCase(GetBlogViaId.pending, (state) => {
                state.loadingBlogBanner = true;
                state.error = null;
            })
            .addCase(GetBlogViaId.fulfilled, (state, action) => {
                state.loadingBlogBanner = false;
                state.blogViaIdData = action.payload;
            })
            .addCase(GetBlogViaId.rejected, (state, action) => {
                state.loadingBlogBanner = false;
                state.error = action.payload;
            })

            //GetBlogViaCategory
            .addCase(GetBlogViaCategory.pending, (state) => {
                state.loadingBlogBanner = true;
                state.error = null;
            })
            .addCase(GetBlogViaCategory.fulfilled, (state, action) => {
                state.loadingBlogBanner = false;
                state.blogViaCategoryData = action.payload;
            })
            .addCase(GetBlogViaCategory.rejected, (state, action) => {
                state.loadingBlogBanner = false;
                state.error = action.payload;
            })

            //GetBlogViaTags
            .addCase(GetBlogViaTags.pending, (state) => {
                state.loadingBlogBanner = true;
                state.error = null;
            })
            .addCase(GetBlogViaTags.fulfilled, (state, action) => {
                state.loadingBlogBanner = false;
                state.blogViaTagsData = action.payload;
            })
            .addCase(GetBlogViaTags.rejected, (state, action) => {
                state.loadingBlogBanner = false;
                state.error = action.payload;
            })

            //GetBlogTitleSearch
            .addCase(GetBlogTitleSearch.pending, (state) => {
                state.loadingBlogBanner = true;
                state.error = null;
            })
            .addCase(GetBlogTitleSearch.fulfilled, (state, action) => {
                state.loadingBlogBanner = false;
                state.blogTitleSearchData = action.payload;
            })
            .addCase(GetBlogTitleSearch.rejected, (state, action) => {
                state.loadingBlogBanner = false;
                state.error = action.payload;
            })
              //GetBlogHomePageDetail
              .addCase(GetBlogHomePageDetail.pending, (state) => {
                state.loadingHomeBlogBanner = true;
                state.error = null;
            })
            .addCase(GetBlogHomePageDetail.fulfilled, (state, action) => {
                state.loadingHomeBlogBanner = false;
                state.blogHomeTitildata = action.payload;
            })
            .addCase(GetBlogHomePageDetail.rejected, (state, action) => {
                state.loadingHomeBlogBanner = false;
                state.error = action.payload;
            })

    },
});
export const { resetData, highLightCategory, hightLightTags } = blogSlice.actions;
export default blogSlice.reducer; 
