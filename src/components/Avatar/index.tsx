import React from 'react';
import { ActivityIndicator, Image, Text, View, StyleSheet } from 'react-native';

type AvatarProps = {
    source?: any;
    alt?: string;
    size?: number;
    fallbackInitials?: string;
    rounded?: 'none' | 'sm' | 'md' | 'lg' | 'xl' | 'full';
    loading?: boolean;
};

export const Avatar: React.FC<AvatarProps> = ({
    source,
    alt,
    size = 48,
    fallbackInitials = '?',
    rounded = 'full',
    loading = false,
}) => {
    const roundedClass = (() => {
        switch (rounded) {
            case 'none':
                return 'rounded-none';
            case 'sm':
                return 'rounded-sm';
            case 'md':
                return 'rounded-md';
            case 'lg':
                return 'rounded-lg';
            case 'xl':
                return 'rounded-xl';
            case 'full':
            default:
                return 'rounded-full';
        }
    })();

    const styles = StyleSheet.create({
        container: {
            width: size,
            height: size,
        },
        image: {
            width: size,
            height: size,
        },
        fallback: {
            width: size,
            height: size,
            backgroundColor: '#9ca3af', // Tailwind gray-400
            alignItems: 'center',
            justifyContent: 'center',
        },
    });

    return (
        <View
            style={styles.container}
            className={`bg-gray-200 overflow-hidden items-center justify-center ${roundedClass}`}
            accessibilityLabel={alt}
        >
            {loading ? (
                <ActivityIndicator size="small" color="#666" />
            ) : source ? (
                <Image
                    source={source}
                    style={styles.image}
                    className={roundedClass}
                    resizeMode="cover"
                />
            ) : (
                <View style={styles.fallback} className={roundedClass}>
                    <Text className="text-white font-bold text-base">{fallbackInitials}</Text>
                </View>
            )}
        </View>
    );
};

export default Avatar;
