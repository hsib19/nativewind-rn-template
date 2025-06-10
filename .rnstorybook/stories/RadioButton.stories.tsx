import React, { useState } from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { View } from 'react-native';
import RadioButton from '../../src/components/RadioButton';

const meta: Meta<typeof RadioButton> = {
    title: 'Components/RadioButton',
    component: RadioButton,
    decorators: [
        (Story) => (
            <View style={{ padding: 16 }}>
                <Story />
            </View>
        ),
    ],
};

export default meta;
type Story = StoryObj<typeof RadioButton>;

export const Default: Story = {
    render: () => {
        const [selected, setSelected] = useState(true);
        return (
            <RadioButton
                label="Default Option"
                selected={selected}
                onPress={() => setSelected(!selected)}
            />
        );
    },
};

export const WithError: Story = {
    render: () => {
        const [selected, setSelected] = useState(false);
        return (
            <RadioButton
                label="Option with error"
                selected={selected}
                onPress={() => setSelected(!selected)}
                error="You must select this"
            />
        );
    },
};

export const Disabled: Story = {
    render: () => (
        <RadioButton
            label="Disabled Option"
            selected={true}
            onPress={() => { }}
            disabled
        />
    ),
};

export const Sizes: Story = {
    render: () => {
        const [selected, setSelected] = useState('md');
        return (
            <View style={{ gap: 12 }}>
                <RadioButton
                    label="Small"
                    selected={selected === 'sm'}
                    onPress={() => setSelected('sm')}
                    size="sm"
                />
                <RadioButton
                    label="Medium"
                    selected={selected === 'md'}
                    onPress={() => setSelected('md')}
                    size="md"
                />
                <RadioButton
                    label="Large"
                    selected={selected === 'lg'}
                    onPress={() => setSelected('lg')}
                    size="lg"
                />
            </View>
        );
    },
};
