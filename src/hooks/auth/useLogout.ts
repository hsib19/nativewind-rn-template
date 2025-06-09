import { useCallback } from 'react';
import { useAppDispatch } from '@store/index';
import { logout } from '@store/authSlice';

export const useLogout = () => {
    const dispatch = useAppDispatch();

    const handleLogout = useCallback(() => {
        dispatch(logout());
    }, [dispatch]);

    return handleLogout;
};
