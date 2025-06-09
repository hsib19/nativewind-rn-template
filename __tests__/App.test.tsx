import React from 'react';
import { render } from '@testing-library/react-native';
import App from '../App';

jest.mock('@/theme/ThemeProvider', () => ({
    ThemeProvider: ({ children }: any) => children,
}));

jest.mock('@/navigation/RootNavigator', () => {
    const { Text } = require('react-native');
    return () => <Text>RootNavigator</Text>;
});

describe('App', () => {
    it('renders without crashing', () => {
        const { getByText } = render(<App />);
        expect(getByText('RootNavigator')).toBeTruthy();
    });
});
