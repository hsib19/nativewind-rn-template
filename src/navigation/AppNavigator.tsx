import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { HomeStackParamList } from '@/types/navigation';
import ProfileScreen from '@/screens/Account/ProfileScreen';
import HomeStackNavigator from './HomeStackNavigator';

const Tab = createBottomTabNavigator<HomeStackParamList>();

const ICONS_MAP: Record<string, string> = {
    Home: 'Home',
    Profile: 'Profile',
};

function renderTabBarIcon(routeName: string, color: string, size: number) {
    const iconName = ICONS_MAP[routeName] ?? 'help-outline';
    return <MaterialIcons name={iconName} size={size} color={color} />;
}

export default function AppNavigator() {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ color, size }) => renderTabBarIcon(route.name, color, size),
                tabBarActiveTintColor: 'tomato',
                tabBarInactiveTintColor: 'gray',
            })}
        >
            <Tab.Screen name="Home" options={{ headerShown: false }} component={HomeStackNavigator} />
            <Tab.Screen name="Profile" component={ProfileScreen} />
        </Tab.Navigator>
    );
}
