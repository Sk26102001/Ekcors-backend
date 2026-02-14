import axiosInstance from "./api.js"

export const registerUser = async (data) => axiosInstance.post('/users/register', data);
export const loginUser = async (data) => axiosInstance.post('/users/login', data);
export const loginMobile = async (data) => axiosInstance.post('/users/login-mobile', data);
export const verifyMobileOtp = async (data) => axiosInstance.post('/users/verify-mobile-otp', data);

export const getCurrentUser = async () => axiosInstance.get('/users/me');
export const updateCurrentUser = async (data) => axiosInstance.patch('/users/me', data);
export const uploadUserImage = async (data) => axiosInstance.post('/users/me/upload-image', data);
export const updatePassword = async (data) => axiosInstance.post('/users/update-password', data);

export const addDriver = async (data) => axiosInstance.post('/users/add-driver', data);
export const getCurrentVendorDriver = async () => axiosInstance.get('/users/vendor-drivers');

export const bookMachinery = async (data) => axiosInstance.post('/bookings', data);

export const logoutUser = async () => axiosInstance.post('/users/logout');