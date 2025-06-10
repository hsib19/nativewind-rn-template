import { IconPacks } from "@/lib/iconMap";
import { TextInputProps } from "react-native";

export interface InputProps extends TextInputProps {
    label?: string;
    labelClassName?: string;
    error?: string;
    iconType?: keyof typeof IconPacks;
    iconName?: string;
    iconPosition?: 'left' | 'right'; 
    iconColor?: string;
    iconSize?: number;
    variant?: 'default' | 'outline' | 'underline';
    rounded?: boolean | 'sm' | 'md' | 'lg' | 'full';
    fullWidth?: boolean;
    shadow?: boolean;
    shadowColor?: string;
    shadowRadius?: number;
    size?: 'sm' | 'md' | 'lg';
}
