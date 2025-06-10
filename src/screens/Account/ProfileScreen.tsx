import React from 'react';
import { View, Text, Button } from 'react-native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';
import type { HomeStackParamList } from '@/types/navigation';
import { useLogout } from '@/hooks/auth/useLogout';

type ProfileScreenNavigationProp = NativeStackNavigationProp<HomeStackParamList, 'Profile'>;

export default function ProfileScreen() {
    const navigation = useNavigation<ProfileScreenNavigationProp>();

    const logout = useLogout();

    return (
        <View className="items-center justify-center flex-1">
            <Text>Profile Screen</Text>
            <Button title="Logout" onPress={logout} />
            <Button title="Profile Setting" onPress={() => navigation.navigate('Detail') } />
        </View>
    );
}
