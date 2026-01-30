import axiosInstance from "./api.js"

export const getAllMachinery = async () => axiosInstance.get('/machinery');
export const getMachinery = async (id) => axiosInstance.get(`/machinery/${id}`);
export const getCurrentUserMachinery = async () => axiosInstance.get('/machinery/me');
export const addMachinery = async (data) => axiosInstance.post('/machinery', data);