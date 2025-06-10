import React from 'react';
import { Pressable, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import { cn } from '@/lib/utils';
import { CheckboxProps } from '@/types/checkbox';

const sizeStyles = {
    sm: {
        box: 'w-4 h-4',
        icon: 12,
        label: 'text-sm',
    },
    md: {
        box: 'w-5 h-5',
        icon: 16,
        label: 'text-base',
    },
    lg: {
        box: 'w-6 h-6',
        icon: 20,
        label: 'text-lg',
    },
};

const Checkbox: React.FC<CheckboxProps> = ({
    label,
    error,
    checked,
    onChange,
    size = 'md',
    disabled = false,
}) => {
    const currentSize = sizeStyles[size] || sizeStyles.md;

    return (
        <View className="flex flex-col">
            <Pressable
                onPress={() => !disabled && onChange(!checked)}
                className="flex-row items-center"
            >
                <View
                    className={cn(
                        'items-center justify-center mr-2 rounded-sm border',
                        currentSize.box,
                        disabled ? 'opacity-50' : '',
                        checked ? 'bg-blue-600 border-blue-600' : 'border-gray-300 bg-white',
                        error && 'border-red-500'
                    )}
                >
                    {checked && (
                        <Icon name="check" size={currentSize.icon} color="#fff" />
                    )}
                </View>
                {label && (
                    <Text className={cn('text-gray-800', currentSize.label)}>
                        {label}
                    </Text>
                )}
            </Pressable>
            {error && <Text className="mt-1 text-sm text-red-500">{error}</Text>}
        </View>
    );
};

export default Checkbox;
