import apiClient from './apiClient';

export const login = (credentials) => {
  return apiClient.post('/auth/login', credentials);
};