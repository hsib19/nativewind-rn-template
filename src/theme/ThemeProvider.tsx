import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';
import { View } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useColorScheme as useNativeWindColorScheme } from 'nativewind';

type Theme = 'light' | 'dark';

interface ThemeContextType {
    theme: Theme;
    setTheme: (value: Theme) => void;
    toggleTheme: () => void;
}

// Key used to persist the theme choice in AsyncStorage
const STORAGE_KEY = '@app_theme';

/**
 * ThemeContext provides current theme and functions to change or toggle it.
 */
const ThemeContext = createContext<ThemeContextType>({
    theme: 'light',
    setTheme: () => { },
    toggleTheme: () => { },
});

/**
 * Custom hook to consume ThemeContext easily.
 */
export const useTheme = () => useContext(ThemeContext);

/**
 * ThemeProvider component wraps the app and provides theme context.
 * It manages theme state, persists theme using AsyncStorage,
 * and syncs NativeWind color scheme accordingly.
 */
export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
    const { setColorScheme } = useNativeWindColorScheme();

    // Local state to hold current theme
    const [theme, setThemeState] = useState<Theme>('light');

    // Flag to track if theme is loaded from storage and ready
    const [isReady, setIsReady] = useState(false);

    /**
     * Load theme from AsyncStorage on mount.
     * If none stored, default to 'light'.
     * After loading, set isReady to true.
     */
    useEffect(() => {
        (async () => {
            try {
                const storedTheme = await AsyncStorage.getItem(STORAGE_KEY);
                if (storedTheme === 'light' || storedTheme === 'dark') {
                    setThemeState(storedTheme);
                    setColorScheme(storedTheme);
                } else {
                    setThemeState('light');
                    setColorScheme('light');
                }
            } catch {
                // In case of error, fallback to 'light'
                setThemeState('light');
                setColorScheme('light');
            } finally {
                setIsReady(true);
            }
        })();
    }, [setColorScheme]);

    /**
     * Save theme changes to AsyncStorage after initial load.
     */
    useEffect(() => {
        if (isReady) {
            AsyncStorage.setItem(STORAGE_KEY, theme).catch(() => {
                // Optional: handle save error here
            });
        }
    }, [theme, isReady]);

    /**
     * Set theme and update NativeWind color scheme.
     * Wrapped in useCallback to avoid unnecessary re-creations.
     */
    const setTheme = useCallback(
        (value: Theme) => {
            setThemeState(value);
            setColorScheme(value);
        },
        [setColorScheme]
    );

    /**
     * Toggle between 'light' and 'dark' themes.
     * Temporarily sets isReady false to avoid flicker during switch.
     */
    const toggleTheme = useCallback(() => {
        setIsReady(false);
        const newTheme = theme === 'dark' ? 'light' : 'dark';
        setThemeState(newTheme);
        setColorScheme(newTheme);
        AsyncStorage.setItem(STORAGE_KEY, newTheme).catch(() => {
            // Optional: handle save error here
        });

        // Delay to let NativeWind apply styles, then mark ready
        setTimeout(() => {
            setIsReady(true);
        }, 100);
    }, [theme, setColorScheme]);

    // Render empty screen with correct background color until ready to avoid flicker
    if (!isReady) {
        return <View style={{ flex: 1, backgroundColor: theme === 'dark' ? '#000' : '#fff' }} />;
    }

    return (
        <ThemeContext.Provider value={{ theme, setTheme, toggleTheme }}>
            <View className={`flex-1 ${theme === 'dark' ? 'dark bg-black' : 'bg-white'}`}>{children}</View>
        </ThemeContext.Provider>
    );
};
