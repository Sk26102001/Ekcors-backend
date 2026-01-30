import axiosInstance from "./api.js";

export const getAllUsers = async () => axiosInstance.get('/users');
export const getUser = async (id) => axiosInstance.get(`/users/${id}`);
export const deleteUser = async (id) => axiosInstance.delete(`/users/${id}`);