import React from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';
import { cn } from '@/lib/utils';
import { RadioButtonProps } from '@/types/radio';

const sizeMap = {
    sm: { outer: 16, inner: 8 },
    md: { outer: 20, inner: 10 },
    lg: { outer: 24, inner: 12 },
};

const RadioButton: React.FC<RadioButtonProps> = ({
    label,
    selected,
    onPress,
    disabled = false,
    size = 'md',
    labelClassName,
    color = '#2563eb',
    error,
}) => {
    const { outer, inner } = sizeMap[size] || sizeMap.md;

    const borderColor = error
        ? '#ef4444'
        : disabled
            ? '#d1d5db'
            : selected
                ? color
                : '#6b7280';

    const dotColor = disabled
        ? '#9ca3af'
        : selected
            ? color
            : 'transparent';

    return (
        <View className="flex flex-col">
            <Pressable
                onPress={onPress}
                disabled={disabled}
                className="flex-row items-center"
            >
                <View
                    style={[
                        styles.radioOuter,
                        getRadioOuterStyle(outer, borderColor, disabled),
                    ]}
                >
                    {selected && (
                        <View
                            style={[
                                styles.radioInner,
                                {
                                    width: inner,
                                    height: inner,
                                    borderRadius: inner / 2,
                                    backgroundColor: dotColor,
                                },
                            ]}
                        />
                    )}
                </View>
                {label && (
                    <Text
                        className={cn(
                            'ml-2 text-gray-800',
                            disabled && 'text-gray-400',
                            labelClassName
                        )}
                    >
                        {label}
                    </Text>
                )}
            </Pressable>
            {error && (
                <Text className="mt-1 text-sm text-red-500">{error}</Text>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    radioOuter: {
        borderWidth: 2,
        alignItems: 'center',
        justifyContent: 'center',
    },
    radioInner: {
        // `backgroundColor`, `width`, `height`, `borderRadius` → tetap dinamis
    },
});

export default RadioButton;

const getRadioOuterStyle = (
    outer: number,
    borderColor: string,
    disabled: boolean
) => ({
    width: outer,
    height: outer,
    borderRadius: outer / 2,
    borderColor,
    backgroundColor: disabled ? '#f9fafb' : '#ffffff',
});
