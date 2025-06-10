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
        <View style={styles.container}>
            {label && <Text style={styles.label}>{label}</Text>}
            <View style={styles.inputWrapper}>
                {icon && <Icon name="search" size={18} color="#6B7280" style={styles.icon} />}
                <TextInput
                    value={query}
                    onChangeText={setQuery}
                    placeholder={placeholder}
                    style={[styles.input, icon && { paddingLeft: 36 }]}
                />
                {loading && <ActivityIndicator size="small" style={styles.loading} />}
            </View>

            {!loading && query.length > 0 && filtered.length > 0 && (
                <FlatList
                    data={filtered}
                    keyExtractor={(item) => item.value}
                    renderItem={({ item }) => (
                        <Pressable onPress={() => handleSelect(item)} style={styles.item}>
                            <Text>{item.label}</Text>
                        </Pressable>
                    )}
                    style={styles.dropdown}
                    keyboardShouldPersistTaps="handled"
                />
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
    },
    label: {
        marginBottom: 8,
        fontSize: 16,
        fontWeight: '500',
        color: '#374151',
    },
    inputWrapper: {
        position: 'relative',
        justifyContent: 'center',
    },
    icon: {
        position: 'absolute',
        left: 12,
        zIndex: 1,
    },
    input: {
        paddingVertical: 12,
        paddingHorizontal: 16,
        borderWidth: 1,
        borderColor: '#D1D5DB',
        borderRadius: 8,
        backgroundColor: '#FFFFFF',
        fontSize: 16,
        color: '#111827',
    },
    loading: {
        position: 'absolute',
        right: 12,
    },
    dropdown: {
        marginTop: 4,
        borderWidth: 1,
        borderColor: '#D1D5DB',
        borderRadius: 8,
        backgroundColor: '#FFFFFF',
        maxHeight: 150,
    },
    item: {
        paddingVertical: 10,
        paddingHorizontal: 16,
    },
});
