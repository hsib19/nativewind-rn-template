import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Meta, StoryObj } from '@storybook/react';
import DatePicker from '../../src/components/DatePicker';

const meta: Meta<typeof DatePicker> = {
    title: 'Components/DatePicker',
    component: DatePicker,
    args: {
        label: 'Tanggal Lahir',
        locale: 'id',
        iconPosition: 'right',
        dateFormat: 'D/MM/YYYY',
    },
};

export default meta;

type Story = StoryObj<typeof DatePicker>;

const Wrapper = (children: React.ReactNode) => (
    <View style={styles.container}>{children}</View>
);

export const Default: Story = {
    render: (args) => Wrapper(<DatePicker {...args} />),
};

export const IconLeft: Story = {
    render: (args) => Wrapper(<DatePicker {...args} />),
    args: {
        iconPosition: 'left',
    },
};

export const CustomFormat: Story = {
    render: (args) => Wrapper(<DatePicker {...args} />),
    args: {
        dateFormat: 'DD MMMM YYYY',
    },
};

export const WithInitialDate: Story = {
    render: (args) => Wrapper(<DatePicker {...args} />),
    args: {
        initialDate: new Date(1990, 5, 15),
    },
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 24,
        backgroundColor: '#ffffff',
    },
});
