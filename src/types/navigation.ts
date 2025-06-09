import { NativeStackNavigationProp } from '@react-navigation/native-stack';

export type HomeStackParamList = {
    Home: undefined;
    Detail: undefined;
    Profile: undefined;
};

export type HomeScreenNavigationProp = NativeStackNavigationProp<HomeStackParamList, 'Home'>;

export type AuthStackParamList = {
    Login: undefined;
    Register: undefined;
};
