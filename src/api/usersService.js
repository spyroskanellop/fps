import apiClient from './apiClient';

export const getUsers = () => {
  return apiClient.get('/users');
};

export const getUserById = (id) => {
  return apiClient.get(`/users/${id}`);
};

export const createUser = (data) => {
  return apiClient.post('/users', data);
};

export const updateUser = (id, data) => {
  return apiClient.put(`/users/${id}`, data);
};

export const deleteUser = (id) => {
  return apiClient.delete(`/users/${id}`);
};

