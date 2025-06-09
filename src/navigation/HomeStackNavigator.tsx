import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '@screens/Home/HomeScreen';
import DetailScreen from '@screens/Home/DetailScreen';

const Stack = createNativeStackNavigator();

export default function HomeStackNavigator() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="HomeMain" component={HomeScreen} options={{ title: 'Home' }} />
            <Stack.Screen name="Detail" component={DetailScreen} />
        </Stack.Navigator>
    );
}
