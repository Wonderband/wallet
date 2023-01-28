import axios from 'axios';
import { auth } from './authAPI';

// const BASE_URL = 'https://wallet.goit.ua';

// const data = axios.create({
//   baseURL: BASE_URL,
// });

// export const setAuthToken = token => {
//   data.defaults.headers.common.Authorization = `Bearer ${token}`;
// };

// const clearAuthToken = () => {
//   auth.defaults.headers.common.Authorization = '';
// };

export const financeAPI = {
  async getCategories () {
    const response = await auth.get('/api/transaction-categories');
    console.log(response);
    return response.data;
  },

 
};
