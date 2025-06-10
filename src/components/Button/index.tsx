import React from 'react';
import {
    Text,
    TouchableOpacity,
    ActivityIndicator,
    View,
} from 'react-native';
import { cn } from '@/lib/utils';
import { IconPacks } from '@/lib/iconMap';
import { ButtonProps } from '@/types/button';

const Button: React.FC<ButtonProps> = ({
    title,
    variant = 'primary',
    loading = false,
    disabled = false,
    fullWidth = false,
    iconType,
    iconName,
    iconSize = 18,
    iconColor,
    iconPosition = 'left',
    shadow = false,
    shadowColor = '#000',
    shadowRadius = 4,
    rounded,
    className,
    ...props
}) => {
    const baseStyles =
        'px-4 py-3 rounded-lg flex-row items-center justify-center';
    const widthStyle = fullWidth ? 'w-full' : '';

    const variants: Record<string, string> = {
        primary: 'bg-blue-600',
        secondary: 'bg-gray-300',
        outline: 'border border-blue-600 bg-transparent',
    };

    const textVariants: Record<string, string> = {
        primary: 'text-white',
        secondary: 'text-gray-800',
        outline: 'text-blue-600',
    };

    const disabledStyles = disabled
        ? 'bg-gray-200 border-gray-200'
        : '';

    const roundedStyle = typeof rounded === 'string'
        ? `rounded-${rounded}`
        : rounded === true
            ? 'rounded-full'
            : 'rounded-lg';

    const IconComponent = iconType && iconName && IconPacks[iconType as keyof typeof IconPacks];

    const renderIcon = () =>
        IconComponent && (
            <IconComponent
                className={iconPosition === 'left' ? 'mr-2' : 'ml-2'}
                name={iconName}
                size={iconSize}
                color={
                    iconColor ??
                    (disabled
                        ? '#aaa'
                        : variant === 'primary'
                            ? '#fff'
                            : variant === 'secondary'
                                ? '#333'
                                : '#007bff')
                }
            />
        );

    const shadowStyle = shadow
        ? {
            elevation: 5, // Android
            shadowColor, // iOS
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.3,
            shadowRadius,
        }
        : {};

    return (
        <TouchableOpacity
            className={cn(
                baseStyles,
                variants[variant],
                disabledStyles,
                widthStyle,
                roundedStyle,
                shadow && 'shadow', // NativeWind fallback
                className
            )}
            style={shadowStyle}
            disabled={disabled || loading}
            {...props}
        >
            {loading ? (
                <ActivityIndicator
                    color={variant === 'primary' ? '#fff' : '#007bff'}
                />
            ) : (
                <View className="flex-row items-center">
                    {iconPosition === 'left' && renderIcon()}
                    <Text
                        className={cn(
                            'font-semibold',
                            textVariants[variant],
                            disabled && 'text-gray-400'
                        )}
                    >
                        {title}
                    </Text>
                    {iconPosition === 'right' && renderIcon()}
                </View>
            )}
        </TouchableOpacity>
    );
};

export default Button;
