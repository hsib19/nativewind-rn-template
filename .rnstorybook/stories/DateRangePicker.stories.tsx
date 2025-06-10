import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Meta, StoryObj } from '@storybook/react';
import DateRangePicker from '../../src/components/DateRangePicker';

const meta: Meta<typeof DateRangePicker> = {
    title: 'Components/DateRangePicker',
    component: DateRangePicker,
    args: {
        label: 'Date Range',
        locale: 'en',
        iconPosition: 'right',
        dateFormat: 'D/MM/YYYY',
    },
};

export default meta;

type Story = StoryObj<typeof DateRangePicker>;

const Wrapper = (children: React.ReactNode) => (
    <View style={styles.container}>{children}</View>
);

export const Default: Story = {
    render: (args) => Wrapper(<DateRangePicker {...args} />),
};

export const IconLeft: Story = {
    render: (args) => Wrapper(<DateRangePicker {...args} />),
    args: {
        iconPosition: 'left',
    },
};

export const CustomFormat: Story = {
    render: (args) => Wrapper(<DateRangePicker {...args} />),
    args: {
        dateFormat: 'DD MMMM YYYY',
    },
};

export const WithInitialRange: Story = {
    render: (args) => Wrapper(<DateRangePicker {...args} />),
    args: {
        initialStartDate: new Date(2025, 0, 1),
        initialEndDate: new Date(2025, 0, 10),
    },
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 24,
        backgroundColor: '#ffffff',
    },
});
