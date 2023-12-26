import CONFIG from './Config';

const API_ENDPOINT = {
  LIST: `${CONFIG.BASE_URL}/list`,
  DETAIL: (id) => `${CONFIG.BASE_URL}/detail/${id}`,
  SEARCH: (keyword) => `${CONFIG.BASE_URL}/search?q=${keyword}`,
  ADD_REVIEW: `${CONFIG.BASE_URL}/review`,
  IMAGE_SMALL: (id) => `${CONFIG.BASE_URL}/images/small/${id}`,
  IMAGE_MEDIUM: (id) => `${CONFIG.BASE_URL}/images/medium/${id}`,
  IMAGE_LARGE: (id) => `${CONFIG.BASE_URL}/images/large/${id}`,
};

export default API_ENDPOINT;
