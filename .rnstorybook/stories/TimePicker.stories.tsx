import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Meta, StoryObj } from '@storybook/react';
import TimePicker from '../../src/components/TimePicker';

const meta: Meta<typeof TimePicker> = {
    title: 'Components/TimePicker',
    component: TimePicker,
    args: {
        label: 'Clock',
        locale: 'id',
        iconPosition: 'right',
        timeFormat: 'HH:mm',
    },
};

export default meta;

type Story = StoryObj<typeof TimePicker>;

const Wrapper = (children: React.ReactNode) => (
    <View style={styles.container}>{children}</View>
);

export const Default: Story = {
    render: (args) => Wrapper(<TimePicker {...args} />),
};

export const IconLeft: Story = {
    render: (args) => Wrapper(<TimePicker {...args} />),
    args: {
        iconPosition: 'left',
    },
};

export const CustomFormat: Story = {
    render: (args) => Wrapper(<TimePicker {...args} />),
    args: {
        timeFormat: 'hh:mm A',
    },
};

export const WithInitialTime: Story = {
    render: (args) => Wrapper(<TimePicker {...args} />),
    args: {
        initialTime: new Date(2025, 0, 1, 9, 30), 
    },
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 24,
        backgroundColor: '#ffffff',
    },
});
