import Select from '@/components/Select';
import React, { useState } from 'react';
import { Text, SafeAreaView } from 'react-native';

const options = [
    { label: 'Indonesia', value: 'id' },
    { label: 'Malaysia', value: 'my' },
    { label: 'Singapore', value: 'sg' },
    { label: 'Thailand', value: 'th' },
];

export default function DetailScreen() {
    const [selected, setSelected] = useState<string | null>(null);

    return (
        <SafeAreaView style={{ flex: 1, padding: 16 }}>
            <Text style={{ fontSize: 18, fontWeight: 'bold', marginBottom: 16 }}>
                Country Selector
            </Text>

            <Select
                label="Select Country"
                placeholder="Choose your country"
                value={selected}
                onChange={setSelected}
                options={options}
            />

            {selected && (
                <Text style={{ marginTop: 16 }}>
                    Selected country code: <Text style={{ fontWeight: 'bold' }}>{selected}</Text>
                </Text>
            )}
        </SafeAreaView>
    );
}
