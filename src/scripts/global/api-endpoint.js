import CONFIG from './config';

const API_ENDPOINT = {
  SIGN_UP: `${CONFIG.BASE_URL}/register`,
  SIGN_IN: `${CONFIG.BASE_URL}/login`,
  CHECK_TOKEN: `${CONFIG.BASE_URL}/checkToken`,
};

export default API_ENDPOINT;
