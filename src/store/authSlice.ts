import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { authService } from '@services/authService';
import { LoginPayload, LoginResponse } from '@/types/auth';

interface AuthState {
    token: string | null;
    user: LoginResponse['user'] | null;
    loading: boolean;
    error: string | null;
    isAuthenticated: boolean;
}

const initialState: AuthState = {
    token: null,
    user: null,
    loading: false,
    error: null,
    isAuthenticated: false,
};

export const login = createAsyncThunk(
    'auth/login',
    async (payload: LoginPayload, { rejectWithValue }) => {
        try {
            const data = await authService.login(payload);
            await AsyncStorage.setItem('auth', JSON.stringify(data));
            return data;
        } catch (error: any) {
            return rejectWithValue(error.response?.data?.message || 'Login failed');
        }
    }
);

export const restoreAuth = createAsyncThunk(
    'auth/restore',
    async (_, { rejectWithValue }) => {
        try {
            const data = await AsyncStorage.getItem('auth');
            if (!data) return rejectWithValue('No saved auth');
            return JSON.parse(data) as LoginResponse;
        } catch {
            return rejectWithValue('Failed to restore auth');
        }
    }
);

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        logout: (state) => {
            AsyncStorage.removeItem('auth');
            state.token = null;
            state.user = null;
            state.isAuthenticated = false;
            state.error = null;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(login.pending, (state) => {
                state.loading = true;
            })
            .addCase(login.fulfilled, (state, action) => {
                state.loading = false;
                state.token = action.payload.token;
                state.user = action.payload.user;
                state.isAuthenticated = true;
            })
            .addCase(login.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload as string;
                state.isAuthenticated = false;
            })
            .addCase(restoreAuth.fulfilled, (state, action) => {
                state.token = action.payload.token;
                state.user = action.payload.user;
                state.isAuthenticated = true;
            })
            .addCase(restoreAuth.rejected, (state) => {
                state.token = null;
                state.user = null;
                state.isAuthenticated = false;
            });
    },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;
