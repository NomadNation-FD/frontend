import axios from "axios";

const http = axios.create({
    'baseURL': import.meta.env.VITE_API_URL
});

http.defaults.headers.common['Content-Type'] = 'application/json';
http.defaults.headers.common['Access-Control-Allow-Origin'] = '*';

http.interceptors.request.use((config) => {
    const token = localStorage.getItem("token");

    if (token && config.headers) {
        config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
}, (error) => {
    return Promise.reject(error);
});

export { http };