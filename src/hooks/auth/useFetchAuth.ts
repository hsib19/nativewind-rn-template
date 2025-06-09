import { useAuth } from './useAuth';
import { authService } from '@services/authService'; // path menyesuaikan

export const useFetchAuth = () => {
    const { token } = useAuth();

    const fetchWithAuth = async <T = any>(url: string, config = {}) => {
        if (!token) {
            throw new Error('No auth token available');
        }
        return authService.fetchWithAuth<T>(url, token, config);
    };

    return fetchWithAuth;
};
