import React from 'react';
import { View, Text, Button } from 'react-native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';
import type { HomeStackParamList } from '@/types/navigation';

type DetailScreenNavigationProp = NativeStackNavigationProp<HomeStackParamList, 'Detail'>;

export default function DetailScreen() {
    const navigation = useNavigation<DetailScreenNavigationProp>();

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Detail Screen</Text>
            <Button title="Go Back" onPress={() => navigation.goBack()} />
        </View>
    );
}
