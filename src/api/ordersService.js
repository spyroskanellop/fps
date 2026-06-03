import apiClient from './apiClient';

export const getOrders = () => {
  return apiClient.get('/orders');
};

export const getOrderById = (id) => {
  return apiClient.get(`/orders/${id}`);
};

export const createOrder = (data) => {
  return apiClient.post('/orders', data);
};

export const updateOrder = (id, data) => {
  return apiClient.put(`/orders/${id}`, data);
};

export const deleteOrder = (id) => {
  return apiClient.delete(`/orders/${id}`);
};

