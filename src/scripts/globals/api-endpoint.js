import CONFIG from './config';

const API_ENDPOINT = {
  RESTAURANT_LIST: `${CONFIG.BASE_URL}/list`,
  DETAIL: (id) => `${CONFIG.BASE_URL}/detail/${id}`,
  PICTURE: (id, option) => `${CONFIG.BASE_URL}/images/${option}/${id}`,
  POST_REVIEW: `${CONFIG.BASE_URL}/review`,
};

export default API_ENDPOINT;
