import React, { ReactNode } from 'react';
import { View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

type Variant = 'default' | 'success' | 'warning' | 'danger' | 'info';
type Size = 'sm' | 'md' | 'lg';
type IconPosition = 'left' | 'right';

type Props = {
    label: string;
    variant?: Variant;
    size?: Size;
    iconName?: string;
    iconColor?: string;
    icon?: ReactNode;
    iconPosition?: IconPosition;
};

export default function Badge({
    label,
    variant = 'default',
    size = 'md',
    iconName,
    iconColor,
    icon,
    iconPosition = 'left',
}: Props) {
    const baseClass = 'flex-row items-center rounded-full self-start';

    const variantClass = {
        default: 'bg-gray-300',
        success: 'bg-green-200',
        warning: 'bg-yellow-200',
        danger: 'bg-red-200',
        info: 'bg-blue-200',
    }[variant];

    const textClass = {
        default: 'text-gray-700',
        success: 'text-green-800',
        warning: 'text-yellow-800',
        danger: 'text-red-800',
        info: 'text-blue-800',
    }[variant];

    const sizeClass = {
        sm: 'py-0.5 px-2 text-xs font-semibold',
        md: 'py-1 px-3 text-sm font-semibold',
        lg: 'py-2 px-4 text-base font-bold',
    }[size];

    const iconSize = {
        sm: 12,
        md: 16,
        lg: 20,
    }[size];

    const iconSpacingStyle = { marginHorizontal: 6 };

    const renderIcon = () => {
        if (icon) {
            return <View style={iconSpacingStyle}>{icon}</View>;
        }
        if (iconName) {
            return (
                <Icon
                    name={iconName}
                    size={iconSize}
                    color={iconColor}
                    style={iconSpacingStyle}
                />
            );
        }
        return null;
    };

    return (
        <View className={`${baseClass} ${variantClass} ${sizeClass} ${iconPosition === 'right' ? 'flex-row-reverse' : ''}`}>
            {renderIcon()}
            <Text className={textClass}>{label}</Text>
        </View>
    );
}
