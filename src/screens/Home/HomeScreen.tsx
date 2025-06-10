import React from 'react';
import { View, Text, Button } from 'react-native';
import type { HomeScreenNavigationProp } from '@/types/navigation';
import { useNavigation } from '@react-navigation/native';

export default function HomeScreen() {
    const navigation = useNavigation<HomeScreenNavigationProp>();

    return (
        <View className="flex-1 justify-center items-center">
            <Text>Home Screen</Text>
            <Button title="Go to Detail" onPress={() => navigation.navigate('Detail')} />
        </View>
    );
}
