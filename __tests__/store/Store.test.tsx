import React from 'react';
import { Provider } from 'react-redux';
import { render } from '@testing-library/react-native'; // atau '@testing-library/react' kalau web
import { store, useAppDispatch, useAppSelector } from '@store/index'; // sesuaikan path

const DispatchTester = ({ onDispatch }: { onDispatch: () => void }) => {
    const dispatch = useAppDispatch();

    React.useEffect(() => {
        onDispatch();
    }, [dispatch, onDispatch]);

    return null;
};

const SelectorTester = ({ onSelect }: { onSelect: (value: any) => void }) => {
    const isAuthenticated = useAppSelector(state => state.auth.isAuthenticated);

    React.useEffect(() => {
        onSelect(isAuthenticated);
    }, [isAuthenticated, onSelect]);

    return null;
};

describe('Redux store and hooks', () => {
    it('store should have initial state from authReducer', () => {
        const state = store.getState();
        expect(state.auth).toBeDefined();
        expect(state.auth.isAuthenticated).toBe(false);
        expect(state.auth.token).toBeNull();
    });

    it('useAppDispatch returns dispatch function', () => {
        let dispatched = false;

        const onDispatch = () => {
            dispatched = true;
        };

        render(
            <Provider store={ store } >
                <DispatchTester onDispatch={ onDispatch } />
            </Provider>
        );

        expect(dispatched).toBe(true);
    });

    it('useAppSelector selects state.auth.isAuthenticated', () => {
        let selectedValue: boolean | null = null;

        const onSelect = (value: boolean) => {
            selectedValue = value;
        };

        render(
            <Provider store={ store } >
        <SelectorTester onSelect={ onSelect } />
        </Provider>
        );

        expect(typeof selectedValue).toBe('boolean');
    });
});
