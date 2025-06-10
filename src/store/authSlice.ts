import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { LoginPayload, LoginResponse } from '@/types/auth';

interface AuthState {
    token: string | null;
    user: LoginResponse['user'] | null;
    loadingAuth: boolean;
    loading: boolean;
    error: string | null;
    isAuthenticated: boolean;
}

const initialState: AuthState = {
    token: null,
    user: null,
    loadingAuth: true,
    loading: false,
    error: null,
    isAuthenticated: false,
};

export const login = createAsyncThunk(
    'auth/login',
    async (payload: LoginPayload, { rejectWithValue }) => {
        const { email, password } = payload;

        return new Promise<LoginResponse>((resolve, reject) => {
            setTimeout(() => {
                if (email === 'user@example.com' && password === 'password') {
                    const data: LoginResponse = {
                        token: 'dummy-token-123',
                        user: {
                            id: '1',
                            name: 'Dummy User',
                            email: email,
                        },
                    };
                    resolve(data);
                } else {
                    reject('Incorrect email or password');
                }
            }, 1000);
        }).then(
            async (data) => {
                await AsyncStorage.setItem('auth', JSON.stringify(data));
                return data;
            },
            (error) => rejectWithValue(error)
        );
    }
);

export const restoreAuth = createAsyncThunk(
    'auth/restore',
    async (_, { rejectWithValue }) => {
        try {
            const data = await AsyncStorage.getItem('auth');
            if (!data) {
                return rejectWithValue('No saved auth');
            }
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
                state.loadingAuth = false;
                state.error = null;
            })
            .addCase(login.fulfilled, (state, action) => {
                state.loading = false;
                state.loadingAuth = false;
                state.token = action.payload.token;
                state.user = action.payload.user;
                state.isAuthenticated = true;
            })
            .addCase(login.rejected, (state, action) => {
                state.loading = false;
                state.loadingAuth = false;
                state.error = action.payload as string;
                state.isAuthenticated = false;
            })
            .addCase(restoreAuth.fulfilled, (state, action) => {
                state.token = action.payload.token;
                state.user = action.payload.user;
                state.isAuthenticated = true;
                state.loading = false;
                state.loadingAuth = false;
            })
            .addCase(restoreAuth.rejected, (state) => {
                state.token = null;
                state.user = null;
                state.isAuthenticated = false;
                state.loading = false;
                state.loadingAuth = false;
            });
    },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;
