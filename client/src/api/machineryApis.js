// import axiosInstance from "./api.js"

// export const getAllMachinery = async () => axiosInstance.get('/machinery');
// export const getMachinery = async (id) => axiosInstance.get(`/machinery/${id}`);
// export const getCurrentUserMachinery = async () => axiosInstance.get('/machinery/me');
// export const addMachinery = async (data) => axiosInstance.post('/machinery', data);



import axiosInstance from "./api.js"

export const getAllMachinery = async () => axiosInstance.get('/machinery');
export const getMachinery = async (id) => axiosInstance.get(`/machinery/${id}`);
export const getCurrentUserMachinery = async () => axiosInstance.get('/machinery/me');

// Fix for file upload - add proper headers
export const addMachinery = async (data) => {
  return axiosInstance.post('/machinery', data, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
};