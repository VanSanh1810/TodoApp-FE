// src/axiosConfig.ts
import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: import.meta.env.VITE_BE_URL, // URL cơ bản của API
    //   timeout: 10000, // Thời gian chờ mặc định là 10 giây
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
});

axiosInstance.defaults.withCredentials = true; // default

export default axiosInstance;
