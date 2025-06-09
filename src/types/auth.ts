export interface LoginPayload {
    email: string;
    password: string;
}

export interface User {
    id: string;
    name: string;
    email: string;
    avatarUrl?: string;
    roles?: string[];
    createdAt?: string;
    updatedAt?: string;
}

export interface LoginResponse {
    token: string;
    expires_in?: number;
    refresh_token?: string;
    user: User;
}

export interface AuthState {
    token: string | null;
    user: LoginResponse['user'] | null;
    isAuthenticated: boolean; 
    loading: boolean;
    error: string | null;
}
