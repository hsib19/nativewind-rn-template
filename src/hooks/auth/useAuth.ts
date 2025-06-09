import { useState, useEffect, useCallback } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { authService } from '@services/authService';
import { LoginPayload, LoginResponse, User } from '@/types/auth';

const TOKEN_KEY = 'auth_token';

export const useAuth = () => {
    const [token, setToken] = useState<string | null>(null);
    const [user, setUser] = useState<User | null>(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const loadToken = async () => {
            const storedToken = await AsyncStorage.getItem(TOKEN_KEY);
            if (storedToken) {
                setToken(storedToken);
                const userData = await authService.fetchUserProfile(storedToken);
                setUser(userData);
            }
        };
        loadToken();
    }, []);

    const login = useCallback(async (payload: LoginPayload): Promise<void> => {
        setLoading(true);
        try {
            const data: LoginResponse = await authService.login(payload);
            setToken(data.token);
            await AsyncStorage.setItem(TOKEN_KEY, data.token);

            const userData = await authService.fetchUserProfile(data.token);
            setUser(userData);
        } finally {
            setLoading(false);
        }
    }, []);

    const logout = useCallback(async () => {
        if (token) {
            try {
                await authService.logout(token);
            } catch {
                // Handle error logout, misal network gagal (boleh ignore)
            }
        }
        setToken(null);
        setUser(null);
        await AsyncStorage.removeItem(TOKEN_KEY);
    }, [token]);

    return {
        token,
        user,
        loading,
        login,
        logout,
        isAuthenticated: !!token,
    };
};
