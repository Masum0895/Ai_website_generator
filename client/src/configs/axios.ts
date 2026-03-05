import axios from 'axios';

const api = axios.create({
    baseURL: import.meta.env.VITE_BASEURL || 'http://localhost:3001',
    withCredentials: true,
});

// Add request interceptor to log requests (for debugging)
api.interceptors.request.use(request => {
    console.log('Starting Request:', request.url);
    return request;
});

api.interceptors.response.use(
    response => response,
    error => {
        console.error('Response Error:', error.response?.data || error.message);
        return Promise.reject(error);
    }
);

export default api;