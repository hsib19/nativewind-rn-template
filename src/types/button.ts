import { TouchableOpacityProps } from 'react-native';
import { IconPackName } from '@/lib/iconMap';

export type ButtonVariant = 'primary' | 'secondary' | 'outline';

export interface ButtonProps extends TouchableOpacityProps {
    title: string;
    variant?: ButtonVariant;
    loading?: boolean;
    disabled?: boolean;
    fullWidth?: boolean;
    iconType?: IconPackName;
    iconName?: string;
    iconSize?: number;
    iconColor?: string;
    className?: string;
    iconPosition?: 'left' | 'right';
    shadow?: boolean;
    shadowColor?: string;
    shadowRadius?: number;
    rounded?: boolean | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'full';
}
