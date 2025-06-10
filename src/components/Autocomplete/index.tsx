import { useState, useMemo } from 'react';
import {
    View,
    Text,
    TextInput,
    FlatList,
    Pressable,
    ActivityIndicator,
    StyleSheet,
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

type Option = {
    label: string;
    value: string;
};

type Props = {
    label?: string;
    options: Option[];
    onSelect?: (option: Option) => void;
    placeholder?: string;
    loading?: boolean;
    icon?: boolean;
};

export default function Autocomplete({
    label,
    options,
    onSelect,
    placeholder = 'Search...',
    loading = false,
    icon = true,
}: Props) {
    const [query, setQuery] = useState('');

    const filtered = useMemo(() => {
        const lower = query.toLowerCase();
        return options.filter((opt) =>
            opt.label.toLowerCase().includes(lower)
        );
    }, [query, options]);

    const handleSelect = (option: Option) => {
        setQuery(option.label);
        onSelect?.(option);
    };

    return (
        <View className="w-full">
            {label && <Text className="mb-2 text-base font-medium text-gray-700">{label}</Text>}

            <View className="relative justify-center">
                {icon && (
                    <Icon
                        name="search"
                        size={18}
                        color="#6B7280"
                        style={styles.positionIconSearch}
                    />
                )}
                <TextInput
                    value={query}
                    onChangeText={setQuery}
                    placeholder={placeholder}
                    className={`py-3 px-4 text-base text-gray-900 bg-white border border-gray-300 rounded-lg ${icon ? 'pl-10' : ''}`}
                />
                {loading && (
                    <ActivityIndicator
                        size="small"
                        className="absolute right-3"
                    />
                )}
            </View>

            {!loading && query.length > 0 && filtered.length > 0 && (
                <FlatList
                    data={filtered}
                    keyExtractor={(item) => item.value}
                    renderItem={({ item }) => (
                        <Pressable
                            onPress={() => handleSelect(item)}
                            className="px-4 py-2"
                        >
                            <Text className="text-gray-800">{item.label}</Text>
                        </Pressable>
                    )}
                    className="mt-1 max-h-40 bg-white border border-gray-300 rounded-lg"
                    keyboardShouldPersistTaps="handled"
                />
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    positionIconSearch: { position: 'absolute', left: 12, top: '50%', marginTop: -9 },
});
