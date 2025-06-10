import React, { useEffect } from 'react';
import { Pressable, View, Text, StyleSheet } from 'react-native';
import Animated, {
    useSharedValue,
    useAnimatedStyle,
    withTiming,
} from 'react-native-reanimated';
import { SwitchProps } from '@/types/switch';
import { cn } from '@/lib/utils';

const sizeMap = {
    sm: { width: 32, height: 18, knob: 14, offset: 14 },
    md: { width: 40, height: 24, knob: 20, offset: 16 },
    lg: { width: 52, height: 30, knob: 26, offset: 20 },
};

const Switch: React.FC<SwitchProps> = ({
    checked,
    onChange,
    label,
    disabled = false,
    labelClassName,
    color = '#2563eb',
    size = 'md',
}) => {
    const { width, height, knob, offset } = sizeMap[size];
    const padding = (height - knob) / 2;

    const knobOffset = useSharedValue(checked ? offset : 0);

    useEffect(() => {
        knobOffset.value = withTiming(checked ? offset : 0, { duration: 200 });
    }, [checked, knobOffset, offset]);

    const knobStyle = useAnimatedStyle(() => ({
        marginLeft: knobOffset.value,
    }));

    const containerStyle = [
        styles.switchContainer,
        {
            width,
            height,
            borderRadius: height / 2,
            padding,
            backgroundColor: disabled
                ? '#e5e7eb' // gray-200
                : checked
                    ? color
                    : '#d1d5db', // gray-300
        },
    ];

    const knobBaseStyle = {
        width: knob,
        height: knob,
        borderRadius: knob / 2,
        backgroundColor: '#fff',
    };

    return (
        <View className="flex-row items-center">
            <Pressable
                onPress={() => !disabled && onChange?.(!checked)}
                disabled={disabled}
                style={containerStyle}
            >
                <Animated.View style={[knobBaseStyle, knobStyle]} />
            </Pressable>
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
        </View>
    );
};

const styles = StyleSheet.create({
    switchContainer: {
        justifyContent: 'center',
    },
});

export default Switch;
