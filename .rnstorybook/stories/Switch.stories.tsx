import React, { useState } from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { View } from 'react-native';
import Switch from '../../src/components/Switch';

const meta: Meta<typeof Switch> = {
    title: 'Components/Switch',
    component: Switch,
    decorators: [
        (Story) => (
            <View style={{ padding: 16 }}>
                <Story />
            </View>
        ),
    ],
};

export default meta;
type Story = StoryObj<typeof Switch>;

export const Default: Story = {
    render: () => {
        const [value, setValue] = useState(false);
        return <Switch value={value} onValueChange={setValue} label="Enable notifications" />;
    },
};

export const Checked: Story = {
    render: () => {
        const [checked, setChecked] = React.useState(true);
        return <Switch checked={checked} onChange={setChecked} label="Active" />;
    },
};

export const Size: Story = {
    render: () => {
        const [smChecked, setSmChecked] = useState(true);
        const [mdChecked, setMdChecked] = useState(true);
        const [lgChecked, setLgChecked] = useState(true);

        return (
            <View style={{ gap: 16 }}>
                <Switch
                    label="Small Switch"
                    size="sm"
                    checked={smChecked}
                    onChange={setSmChecked}
                />
                <Switch
                    label="Medium Switch"
                    size="md"
                    checked={mdChecked}
                    onChange={setMdChecked}
                />
                <Switch
                    label="Large Switch"
                    size="lg"
                    checked={lgChecked}
                    onChange={setLgChecked}
                />
            </View>
        );
    },
}

export const Disabled: Story = {
    render: () => {
        return <Switch value={true} onValueChange={() => { }} label="Disabled" disabled />;
    },
};

export const WithError: Story = {
    render: () => {
        const [value, setValue] = useState(false);
        return (
            <Switch
                value={value}
                onValueChange={setValue}
                label="Agree to terms"
                error="You must accept terms"
            />
        );
    },
};
