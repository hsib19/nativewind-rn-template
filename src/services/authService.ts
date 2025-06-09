import axios, { AxiosRequestConfig } from 'axios';
import { LoginPayload, LoginResponse, User } from '@/types/auth';

const API_BASE_URL = 'https://your-api.com';

export const authService = {
    login: async (payload: LoginPayload): Promise<LoginResponse> => {
        const response = await axios.post<LoginResponse>(`${API_BASE_URL}/login`, payload);
        return response.data;
    },

    fetchWithAuth: async <T = any>(url: string, token: string, config: AxiosRequestConfig = {}): Promise<T> => {
        const response = await axios({
            ...config,
            url,
            headers: {
                Authorization: `Bearer ${token}`,
                ...(config.headers || {}),
            },
        });
        return response.data;
    },

    fetchUserProfile: async (token: string): Promise<User> => {
        return authService.fetchWithAuth<User>(`${API_BASE_URL}/me`, token);
    },

    logout: async (token: string): Promise<void> => {
        await axios.post(`${API_BASE_URL}/logout`, null, {
            headers: { Authorization: `Bearer ${token}` },
        });
    },
};
