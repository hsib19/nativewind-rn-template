import React from 'react';
import { View, Text, Button } from 'react-native';
import type { HomeScreenNavigationProp } from '@/types/navigation';
import { useNavigation } from '@react-navigation/native';

export default function HomeScreen() {
    const navigation = useNavigation<HomeScreenNavigationProp>();

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Home Screen</Text>
            <Button title="Go to Detail" onPress={() => navigation.navigate('Detail')} />
        </View>
    );
}
