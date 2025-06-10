import React from 'react';
import { View } from 'react-native';
import { Meta, StoryObj } from '@storybook/react';
import Checkbox from '../../src/components/Checkbox';

const meta: Meta<typeof Checkbox> = {
    title: 'Components/Checkbox',
    component: Checkbox,
    args: {
        checked: false,
        label: 'Accept terms and conditions',
        size: 'md',
    },
    decorators: [
        (Story) => (
            <View style={{ padding: 16 }}>
                <Story />
            </View>
        ),
    ],
};

export default meta;
type Story = StoryObj<typeof Checkbox>;

export const Default: Story = {};

export const Checked: Story = {
    args: {
        checked: true,
    },
};

export const Small: Story = {
    args: {
        size: 'sm',
    },
};

export const Large: Story = {
    args: {
        size: 'lg',
    },
};

export const WithError: Story = {
    args: {
        error: 'This field is required',
    },
};

export const Disabled: Story = {
    args: {
        disabled: true,
        checked: true,
    },
};
