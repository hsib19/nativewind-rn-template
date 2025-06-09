import { configureStore } from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';
import reducer, { login, logout, restoreAuth } from '@/store/authSlice';
import { LoginPayload } from '@/types/auth';

jest.mock('@react-native-async-storage/async-storage', () => ({
    setItem: jest.fn(() => Promise.resolve()),
    getItem: jest.fn(() => Promise.resolve(null)),
    removeItem: jest.fn(() => Promise.resolve()),
}));

describe('authSlice (integration test)', () => {
    const createStore = () =>
        configureStore({
            reducer: {
                auth: reducer,
            },
        });

    const initialState = {
        token: null,
        user: null,
        loadingAuth: true,
        loading: false,
        error: null,
        isAuthenticated: false,
    };

    it('should return the initial state', () => {
        const store = createStore();
        expect(store.getState().auth).toEqual(initialState);
    });

    it('should handle logout', () => {
        const store = createStore();

        store.dispatch(logout());

        const state = store.getState().auth;

        expect(AsyncStorage.removeItem).toHaveBeenCalledWith('auth');
        expect(state.token).toBe(null);
        expect(state.user).toBe(null);
        expect(state.isAuthenticated).toBe(false);
    });

    it('should handle successful login', async () => {
        const store = createStore();

        const payload: LoginPayload = {
            email: 'user@example.com',
            password: 'password',
        };

        await store.dispatch(login(payload));

        const state = store.getState().auth;

        expect(state.token).toBe('dummy-token-123');
        expect(state.user?.email).toBe('user@example.com');
        expect(state.isAuthenticated).toBe(true);
        expect(AsyncStorage.setItem).toHaveBeenCalledWith(
            'auth',
            expect.any(String)
        );
    });

    it('should handle login error', async () => {
        const store = createStore();

        const payload: LoginPayload = {
            email: 'wrong@example.com',
            password: 'wrong',
        };

        await store.dispatch(login(payload));

        const state = store.getState().auth;

        expect(state.token).toBe(null);
        expect(state.isAuthenticated).toBe(false);
        expect(state.error).toBe('Incorrect email or password');
    });

    it('should handle restoreAuth success', async () => {
        const mockData = {
            token: 'restored-token',
            user: {
                id: '1',
                name: 'Restored User',
                email: 'restored@example.com',
            },
        };

        (AsyncStorage.getItem as jest.Mock).mockResolvedValueOnce(JSON.stringify(mockData));

        const store = createStore();
        await store.dispatch(restoreAuth());

        const state = store.getState().auth;

        expect(state.token).toBe(mockData.token);
        expect(state.user?.email).toBe('restored@example.com');
        expect(state.isAuthenticated).toBe(true);
    });

    it('should handle restoreAuth failure when no saved data', async () => {
        (AsyncStorage.getItem as jest.Mock).mockResolvedValueOnce(null);

        const store = createStore();
        await store.dispatch(restoreAuth());

        const state = store.getState().auth;

        expect(state.token).toBe(null);
        expect(state.user).toBe(null);
        expect(state.isAuthenticated).toBe(false);
    });

    it('should handle restoreAuth failure when AsyncStorage throws', async () => {
        (AsyncStorage.getItem as jest.Mock).mockRejectedValueOnce(new Error('Storage error'));

        const store = createStore();
        await store.dispatch(restoreAuth());

        const state = store.getState().auth;

        expect(state.token).toBe(null);
        expect(state.user).toBe(null);
        expect(state.isAuthenticated).toBe(false);
    });
});
