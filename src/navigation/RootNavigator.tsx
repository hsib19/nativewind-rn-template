import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { restoreAuth } from '@store/authSlice';
import AppNavigator from './AppNavigator';
import AuthNavigator from './AuthNavigator';
import { useAppDispatch, useAppSelector } from '@store/index';

export default function App() {
    const dispatch = useAppDispatch();
    const { isAuthenticated } = useAppSelector((state) => state.auth);

    useEffect(() => {
        dispatch(restoreAuth());
    }, []);

    return (
        <NavigationContainer>
            {isAuthenticated ? <AppNavigator /> : <AuthNavigator />}
        </NavigationContainer>
    );
}
