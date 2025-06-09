import React, { useState } from 'react';
import { View, TextInput, Button, Text } from 'react-native';
import { useAppDispatch, useAppSelector } from '@/store';
import { AuthStackParamList } from '@/types/navigation';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { login } from '@/store/authSlice';

type Props = NativeStackScreenProps<AuthStackParamList, 'Login'>;

export default function LoginScreen(navigation: Props) {
    const dispatch = useAppDispatch();
    const { loading, error } = useAppSelector((state) => state.auth);
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    const handleLogin = () => {
        dispatch(login({ email, password }));
    };

    return (
        <View>
            <TextInput placeholder="Email" value={email} onChangeText={setEmail} />
            <TextInput
                placeholder="Password"
                value={password}
                onChangeText={setPassword}
                secureTextEntry
            />
            <Button title={loading ? 'Loading...' : 'Login'} onPress={handleLogin} />
            {error && <Text style={{ color: 'red' }}>{error}</Text>}
        </View>
    );
}
