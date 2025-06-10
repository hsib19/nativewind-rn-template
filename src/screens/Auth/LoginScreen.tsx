import React, { useState } from 'react';
import { View, TextInput, Text } from 'react-native';
import { useAppDispatch, useAppSelector } from '@/store';
import { login } from '@/store/authSlice';
import Button from '@/components/Button';

export default function LoginScreen() {
    const dispatch = useAppDispatch();
    const { loading, error } = useAppSelector((state) => state.auth);
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    const handleLogin = () => {
        dispatch(login({ email, password }));
    };

    return (
        <View className="p-5">
            <TextInput placeholder="Email" value={email} onChangeText={setEmail} />
            <TextInput
                placeholder="Password"
                value={password}
                onChangeText={setPassword}
                secureTextEntry
            />
            <Button iconName='home' rounded="md" shadowRadius={6} shadow={true} iconPosition='right' iconType='Feather' title={loading ? 'Loading...' : 'Login'} onPress={handleLogin} />
            {error && <Text className="text-red-500">{error}</Text>}
        </View>
    );
}
