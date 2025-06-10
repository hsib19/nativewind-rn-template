import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { useAppDispatch, useAppSelector } from '@/store';
import { login } from '@/store/authSlice';
import Button from '@/components/Button';
import Input from '@/components/Input';

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
            <Input placeholder="Email" value={email} onChangeText={setEmail} />
            <Input
                placeholder="Password"
                value={password}
                onChangeText={setPassword}
                secureTextEntry
            />
            <Button iconName="home" rounded="md" shadowRadius={6} shadow={true} iconPosition="right" iconType="Feather" title={loading ? 'Loading...' : 'Login'} onPress={handleLogin} />
            {error && <Text className="text-red-500">{error}</Text>}
        </View>
    );
}
