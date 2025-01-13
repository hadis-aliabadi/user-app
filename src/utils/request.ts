import Axios from 'axios';
import { useAuthStore } from '~/store/auth-store';
import { API_URL } from '~/config/constants';

const axiosInstance = Axios.create({
    baseURL: `${API_URL}`,
    headers: { 'Content-Type': 'application/json' },
});

axiosInstance.interceptors.request.use(
    (config) => {
        const token = useAuthStore.getState().token; // Access the token from Zustand store
        if (token) {
            config.headers['Authorization'] = `Bearer ${token}`;
        }
        return config;
    },
    (error) => Promise.reject(error),
);

export default axiosInstance;

export function getFormData(object: any): FormData {
    const formData = new FormData();

    for (const key in object) {
        if (object.hasOwnProperty(key) && !!object[key]) {
            formData.append(key, object[key]);
        }
    }

    return formData;
}
