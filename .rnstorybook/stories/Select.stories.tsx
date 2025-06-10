import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Meta, StoryObj } from '@storybook/react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { BottomSheetModalProvider } from '@gorhom/bottom-sheet';

import Select from '../../src/components/Select';

const meta: Meta<typeof Select> = {
    title: 'Components/Select',
    component: Select,
    decorators: [
        (Story) => (
            <GestureHandlerRootView style={{ flex: 1 }}>
                <BottomSheetModalProvider>
                    <View style={styles.container}>
                        <Story />
                    </View>
                </BottomSheetModalProvider>
            </GestureHandlerRootView>
        ),
    ],
};

export default meta;

type Story = StoryObj<typeof Select>;

export const Default: Story = {
    render: () => {
        const [selected, setSelected] = useState<string | null>(null);

        return (
            <Select
                label="Choose a fruit"
                placeholder="Select one"
                options={[
                    { label: 'Apple', value: 'apple' },
                    { label: 'Banana', value: 'banana' },
                    { label: 'Cherry', value: 'cherry' },
                ]}
                value={selected}
                onChange={setSelected}
            />
        );
    },
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
    },
});
