// export const baseUrl = 'http://localhost:8080';
// export const baseUrl = 'http://103.81.118.226:8080';
export const baseUrl = import.meta.env.VITE_NODE_API_URI;
export const apiUrl = `${baseUrl}/api/v1/admin/`;

export const getHomeAllBanners = `${baseUrl}/api/v1/client/dashboard/get-home-all-banners`;
export const getProductList = `${baseUrl}/api/v1/client/dashboard/get-product-list`;
export const getProductAllData = `${baseUrl}/api/v1/client/dashboard/get-product-all`;
export const getAboutData = `${baseUrl}/api/v1/client/dashboard/get-about-pyramid-details`
export const getTeamData = `${baseUrl}/api/v1/client/dashboard/get-about-team-details`

export const getContactPageDetails = `${baseUrl}/api/v1/client/dashboard/get-contact-details`;
export const submitContactForm = `${baseUrl}/api/v1/client/dashboard/submit-contact-form`;

export const getEventDetails = `${baseUrl}/api/v1/client/dashboard/get-event-details`;
export const getTreatMentDetails = `${baseUrl}/api/v1/client/dashboard/get-treatment-detail-for-home`;
export const getTrainingDetails = `${baseUrl}/api/v1/client/dashboard/get-training-details`;
export const getTrainingPageDetails = `${baseUrl}/api/v1/client/dashboard/get-training-page-details`;

export const getBlogPageDetails = `${baseUrl}/api/v1/client/dashboard/get-blog-details`;
export const getBlogCategoryDetails = `${baseUrl}/api/v1/client/dashboard/get-blog-category-details`;
export const getBlogTags = `${baseUrl}/api/v1/client/dashboard/get-blog-tags-details`;
export const getBlogViaId = `${baseUrl}/api/v1/client/dashboard/get-single-blog-details`;
export const getBlogViaCategory = `${baseUrl}/api/v1/client/dashboard/get-blog-via-category-details`;
export const getBlogViaTags = `${baseUrl}/api/v1/client/dashboard/get-blog-via-tags-details`;
export const getBlogTitleSearch = `${baseUrl}/api/v1/client/dashboard/get-blog-via-title-search`;
export const getBlogDetailsForHome = `${baseUrl}/api/v1/client/dashboard/get-blog-home-pages-details`;

export const GlobalData = `${baseUrl}/api/v1/client/dashboard/get-global-banner-details`;

export const footerData = `${baseUrl}/api/v1/client/dashboard/get-footer-banner-details`;

// submit-contact-form

export default {
  getHomeAllBanners,
  getProductList,
  getProductAllData,
  getContactPageDetails,
  submitContactForm,
  getEventDetails,
  getAboutData,
  getTeamData,
  getTreatMentDetails,
  getTrainingDetails,
  getTrainingPageDetails,
  getBlogCategoryDetails,
  getBlogPageDetails,
  getBlogTags,
  getBlogTitleSearch,
  getBlogViaCategory,
  getBlogViaTags,
  getBlogViaId,
  getBlogDetailsForHome,
  GlobalData,
  footerData
};
