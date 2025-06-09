import React from 'react';
import { View, Text, Button } from 'react-native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';
import type { HomeStackParamList } from '@/types/navigation';

type ProfileScreenNavigationProp = NativeStackNavigationProp<HomeStackParamList, 'Profile'>;

export default function ProfileScreen() {
    const navigation = useNavigation<ProfileScreenNavigationProp>();

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Profile Screen</Text>
        </View>
    );
}
