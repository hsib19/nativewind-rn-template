import React from 'react';
import { View } from 'react-native';
import { Meta, StoryObj } from '@storybook/react';
import Badge from '../../src/components/Badge';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const meta: Meta<typeof Badge> = {
    title: 'Components/Badge',
    component: Badge,
    args: {
        label: 'Example Badge',
        variant: 'default',
        size: 'md',
        iconPosition: 'left',
    },
};

export default meta;

type Story = StoryObj<typeof Badge>;

export const Default: Story = {};

export const WithIconNameLeft: Story = {
    args: {
        iconName: 'check',
        iconPosition: 'left',
        variant: 'success',
    },
};

export const WithIconNameRight: Story = {
    args: {
        iconName: 'alert-triangle',
        iconPosition: 'right',
        variant: 'warning',
    },
};

export const WithCustomIconLeft: Story = {
    args: {
        icon: <MaterialIcons name="star" size={16} color="#2563EB" />,
        iconPosition: 'left',
        variant: 'info',
    },
};

export const WithCustomIconRight: Story = {
    args: {
        icon: <MaterialIcons name="star" size={16} color="#2563EB" />,
        iconPosition: 'right',
        variant: 'info',
    },
};

export const Sizes: Story = {
    render: (args) => (
        <View style={{ flexDirection: 'row', gap: 12, padding: 20 }}>
            <Badge {...args} label="Small" size="sm" />
            <Badge {...args} label="Medium" size="md" />
            <Badge {...args} label="Large" size="lg" />
        </View>
    ),
};
