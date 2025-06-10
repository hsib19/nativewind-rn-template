import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Meta, StoryObj } from '@storybook/react';
import Autocomplete from '../../src/components/Autocomplete';

const options = [
    { label: 'Indonesia', value: 'ID' },
    { label: 'India', value: 'IN' },
    { label: 'United States', value: 'US' },
    { label: 'United Kingdom', value: 'UK' },
    { label: 'Germany', value: 'DE' },
    { label: 'France', value: 'FR' },
    { label: 'Japan', value: 'JP' },
    { label: 'Canada', value: 'CA' },
];

const meta: Meta<typeof Autocomplete> = {
    title: 'Components/Autocomplete',
    component: Autocomplete,
    args: {
        label: 'Country',
        options,
        placeholder: 'Search country...',
        loading: false,
        icon: true,
    },
};

export default meta;

type Story = StoryObj<typeof Autocomplete>;

const Wrapper = (children: React.ReactNode) => (
    <View style={styles.container}>{children}</View>
);

export const Default: Story = {
    render: (args) => Wrapper(<Autocomplete {...args} />),
};

export const WithoutIcon: Story = {
    render: (args) => Wrapper(<Autocomplete {...args} />),
    args: {
        icon: false,
    },
};

export const WithLoading: Story = {
    render: (args) => Wrapper(<Autocomplete {...args} />),
    args: {
        loading: true,
    },
};

export const CustomOptions: Story = {
    render: (args) => Wrapper(<Autocomplete {...args} />),
    args: {
        options: [
            { label: 'Apple', value: 'apple' },
            { label: 'Banana', value: 'banana' },
            { label: 'Cherry', value: 'cherry' },
        ],
        placeholder: 'Search fruit...',
    },
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 24,
        backgroundColor: '#ffffff',
    },
});
