import axios from 'axios';

const BASE_URL = 'https://wallet.goit.ua';

export const auth = axios.create({
  baseURL: BASE_URL,
});

export const setAuthToken = token => {
  auth.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const clearAuthToken = () => {
  auth.defaults.headers.common.Authorization = '';
};

export const authAPI = {
  async registerUser(formData) {
    const response = await auth.post('/api/auth/sign-up', formData);
    setAuthToken(response.data.token);
    return response.data;
  },

  async loginUser(formData) {
    const response = await auth.post('/api/auth/sign-in', formData);
    setAuthToken(response.data.token);
    return response.data;
  },

  async logoutUser() {
    const response = await auth.delete('/api/auth/sign-out');
    clearAuthToken();
    return response.data;
  },

  async refreshUser() {
    const response = await auth('/api/users/current');
    return response.data;
  },
};
