import apiClient from './apiClient';

export const getCustomers = () => {
  return apiClient.get('/customers');
};

export const getCustomerById = (id) => {
  return apiClient.get(`/customers/${id}`);
};

export const createCustomer = (data) => {
  return apiClient.post('/customers', data);
};

export const updateCustomer = (id, data) => {
  return apiClient.put(`/customers/${id}`, data);
};

export const deleteCustomer = (id) => {
  return apiClient.delete(`/customers/${id}`);
};

