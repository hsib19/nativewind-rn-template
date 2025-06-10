import React from 'react';
import {
    Text,
    TouchableOpacity,
    ActivityIndicator,
} from 'react-native';
import { cn } from '@lib/utils';
import * as Icons from 'react-native-vector-icons';
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
    className,
    ...props
}) => {
    const baseStyles = 'px-4 py-3 rounded-lg flex-row items-center justify-center';
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

    const IconComponent = iconType && iconName ? (Icons[iconType] as any) : null;

    return (
        <TouchableOpacity
            className={cn(
                baseStyles,
                variants[variant],
                disabledStyles,
                widthStyle,
                className
            )}
            disabled={disabled || loading}
            {...props}
        >
            {loading ? (
                <ActivityIndicator color={variant === 'primary' ? '#fff' : '#007bff'} />
            ) : (
                <>
                    {IconComponent && (
                        <IconComponent
                            className="mr-6"
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
                    )}
                    <Text
                        className={cn(
                            'font-semibold',
                            textVariants[variant],
                            disabled && 'text-gray-400'
                        )}
                    >
                        {title}
                    </Text>
                </>
            )}
        </TouchableOpacity>
    );
};

export default Button;
