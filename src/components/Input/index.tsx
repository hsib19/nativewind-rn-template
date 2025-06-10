import React from 'react';
import {
    TextInput,
    View,
    Text,
} from 'react-native';
import { cn } from '@/lib/utils';
import { IconPacks } from '@/lib/iconMap';
import { InputProps } from '@/types/input';

const sizeStyles = {
    sm: {
        input: 'text-sm py-1 px-3',
        icon: 16,
    },
    md: {
        input: 'text-base py-1 px-4',
        icon: 20,
    },
    lg: {
        input: 'text-lg py-3 px-5',
        icon: 24,
    },
};

const Input: React.FC<InputProps> = ({
    label,
    labelClassName,
    error,
    iconType,
    iconName,
    iconSize,
    iconColor = '#6b7280',
    iconPosition = 'left',
    variant = 'default',
    rounded = 'md',
    fullWidth = false,
    shadow = false,
    shadowColor = '#000',
    shadowRadius = 4,
    className,
    editable = true,
    size = 'md',
    ...props
}) => {
    const IconComponent =
        iconType && iconName && IconPacks[iconType as keyof typeof IconPacks];
    const currentSize = sizeStyles[size] || sizeStyles['md'];
    const currentIconSize = iconSize ?? currentSize.icon;

    const roundedStyle =
        typeof rounded === 'string'
            ? `rounded-${rounded}`
            : rounded === true
                ? 'rounded-full'
                : 'rounded-md';

    const borderStyle =
        variant === 'outline'
            ? 'border border-gray-300 bg-white'
            : variant === 'underline'
                ? 'border-b border-gray-300 bg-transparent'
                : 'bg-gray-100';

    const inputDirection = 'flex-row';

    const iconMarginClass =
        iconPosition === 'left'
            ? 'mr-2'
            : iconPosition === 'right'
                ? 'ml-2'
                : iconPosition === 'top'
                    ? 'mb-1'
                    : 'mt-1';

    const containerStyles = cn(
        'flex flex-col',
        fullWidth ? 'w-full' : '',
        className
    );

    const inputWrapperStyles = cn(
        'items-center',
        inputDirection,
        roundedStyle,
        borderStyle,
        currentSize.input,
        editable ? 'text-black' : 'bg-gray-100 text-gray-400',
        error ? 'border-red-500' : '',
        shadow && 'shadow'
    );

    const shadowStyle = shadow
        ? {
            elevation: 3,
            shadowColor,
            shadowOffset: { width: 0, height: 1 },
            shadowOpacity: 0.2,
            shadowRadius,
        }
        : {};

    return (
        <View className={containerStyles}>
            {label && (
                <Text
                    className={cn('mb-1 text-sm text-gray-700 font-medium', labelClassName)}
                >
                    {label}
                </Text>
            )}
            <View className={inputWrapperStyles} style={shadowStyle}>
                <View className={iconPosition === 'left' || iconPosition === 'right' ? 'flex-row items-center flex-1' : 'flex-1'}>
                    {iconPosition === 'left' && IconComponent && (
                        <IconComponent
                            name={iconName}
                            size={currentIconSize}
                            color={iconColor}
                            className={iconMarginClass}
                        />
                    )}
                    <TextInput
                        className="flex-1 text-base"
                        placeholderTextColor="#9ca3af"
                        editable={editable}
                        {...props}
                    />
                    {iconPosition === 'right' && IconComponent && (
                        <IconComponent
                            name={iconName}
                            size={currentIconSize}
                            color={iconColor}
                            className={iconMarginClass}
                        />
                    )}
                </View>
             
            </View>
            {error && (
                <Text className="mt-1 text-sm text-red-500">{error}</Text>
            )}
        </View>
    );
};

export default Input;
