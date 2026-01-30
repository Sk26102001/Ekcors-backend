import axios from 'axios'

const axiosIntance = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL,
    withCredentials: true,
})

axiosIntance.interceptors.response.use(
    (response) => response.data,
    (error) => {
        const message = error?.response?.data?.message || error.message || 'Unknown API error!'
        return Promise.reject(new Error(message))
    },
)

export default axiosIntance
