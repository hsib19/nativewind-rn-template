import { TouchableOpacityProps } from 'react-native';
import * as Icons from 'react-native-vector-icons';

export type ButtonVariant = 'primary' | 'secondary' | 'outline';

export interface ButtonProps extends TouchableOpacityProps {
    title: string;
    variant?: ButtonVariant;
    loading?: boolean;
    disabled?: boolean;
    fullWidth?: boolean;
    iconType?: keyof typeof Icons;
    iconName?: string;
    iconSize?: number;
    iconColor?: string;
    className?: string;
}
