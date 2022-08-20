import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://localhost:3000/',
  withCredentials: true,
  headers: { 'Content-Type': 'application/json' },
});

export const profilesAPI = {
  async getUsers(page = 1, limit = 10) {
    const response = await instance.get(`contacts?page=${page}&limit=${limit}`);
    return response.data;
  },
};

export const authAPI = {
  async Login(email, password) {
    const response = await instance.post('auth/login', {
      email,
      password,
    });
    return response.data;
  },
};
