import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { restoreAuth } from '@store/authSlice';
import AppNavigator from './AppNavigator';
import AuthNavigator from './AuthNavigator';
import { useAppDispatch, useAppSelector } from '@store/index';
import { ActivityIndicator, View } from 'react-native';

export default function App() {
    const dispatch = useAppDispatch();
    const { isAuthenticated, loadingAuth } = useAppSelector((state) => state.auth);

    useEffect(() => {
        dispatch(restoreAuth());
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    if (loadingAuth) {
        return(
            <View className="flex-1 items-center justify-center">
                <ActivityIndicator />
            </View>
        );
    }

    return (
        <NavigationContainer>
            {isAuthenticated === false ? <AppNavigator /> : <AuthNavigator />}
        </NavigationContainer>
    );
}
