import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { View } from 'react-native';
import Input from '../../src/components/Input';

const meta: Meta<typeof Input> = {
    title: 'Components/Input',
    component: Input,
    args: {
        placeholder: 'Type something...',
        fullWidth: true,
        variant: 'outline',
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
type Story = StoryObj<typeof Input>;

export const Default: Story = {
    args: {
        label: 'Name',
    },
};

export const WithLeftIcon: Story = {
    args: {
        label: 'Email',
        iconType: 'Feather',
        iconName: 'mail',
        iconPosition: 'left',
    },
};

export const WithRightIcon: Story = {
    args: {
        label: 'Search',
        iconType: 'Feather',
        iconName: 'search',
        iconPosition: 'right',
    },
};

export const ErrorState: Story = {
    args: {
        label: 'Username',
        error: 'Username is required',
    },
};

export const Disabled: Story = {
    args: {
        label: 'Disabled Input',
        editable: false,
        value: 'Not editable',
    },
};

export const UnderlineVariant: Story = {
    args: {
        label: 'Underline Input',
        variant: 'underline',
    },
};

export const WithShadowAndRounded: Story = {
    args: {
        label: 'Shadowed Input',
        iconType: 'Feather',
        iconName: 'user',
        iconPosition: 'left',
        rounded: 'full',
        shadow: true,
        shadowColor: '#1e40af',
        shadowRadius: 6,
    },
};

export const Small: Story = {
    args: {
        label: 'Small Input',
        size: 'sm',
    },
};

export const LargeWithIcon: Story = {
    args: {
        label: 'Large Input',
        size: 'lg',
        iconType: 'Feather',
        iconName: 'user',
    },
};

export const LabelCustomStyle: Story = {
    args: {
        label: 'Styled Label',
        labelClassName: 'text-blue-600 text-base font-bold',
    },
};
