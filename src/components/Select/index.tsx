import React, { useCallback, useMemo, useRef } from 'react';
import {
    Text,
    View,
    TouchableOpacity,
    FlatList,
    StyleSheet,
} from 'react-native';
import {
    BottomSheetModal,
    BottomSheetView,
    BottomSheetBackdrop,
} from '@gorhom/bottom-sheet';
import Ionicons from 'react-native-vector-icons/Ionicons';

type Option = { label: string; value: string };

interface SelectProps {
    label?: string;
    placeholder?: string;
    options: Option[];
    value: string | null;
    onChange: (value: string) => void;
}

const Select = ({
    label,
    placeholder = 'Choose an option',
    options,
    value,
    onChange,
}: SelectProps) => {
    const bottomSheetModalRef = useRef<BottomSheetModal>(null);
    const snapPoints = useMemo(() => ['30%', '50%'], []);

    const openModal = useCallback(() => {
        bottomSheetModalRef.current?.present();
    }, []);

    const closeModal = useCallback(() => {
        bottomSheetModalRef.current?.dismiss();
    }, []);

    const handleSelect = (val: string) => {
        onChange(val);
        closeModal();
    };

    const renderBackdrop = useCallback(
        (props: any) => (
            <BottomSheetBackdrop
                {...props}
                appearsOnIndex={0}
                disappearsOnIndex={-1}
                pressBehavior="close"
            />
        ),
        []
    );

    return (
        <View>
            {label && <Text style={styles.label}>{label}</Text>}

            <TouchableOpacity
                style={styles.input}
                onPress={openModal}
                activeOpacity={0.8}
            >
                <Text style={styles.inputText}>
                    {value
                        ? options.find((opt) => opt.value === value)?.label
                        : placeholder}
                </Text>
            </TouchableOpacity>

            <BottomSheetModal
                ref={bottomSheetModalRef}
                index={0}
                snapPoints={snapPoints}
                enablePanDownToClose
                onDismiss={() => { }}
                backdropComponent={renderBackdrop}
                backgroundStyle={styles.modalBackground}
            >
                <BottomSheetView style={styles.sheetContent}>
                    <FlatList
                        data={options}
                        keyExtractor={(item) => item.value}
                        renderItem={({ item, index }) => {
                            const isSelected = item.value === value;
                            const isLast = index === options.length - 1;
                            return (
                                <TouchableOpacity
                                    onPress={() => handleSelect(item.value)}
                                    style={[
                                        styles.option,
                                        isLast && { borderBottomWidth: 0 },
                                    ]}
                                >
                                    <Text
                                        style={[
                                            styles.optionText,
                                            isSelected && { color: '#6366f1' }, // text-primary
                                        ]}
                                    >
                                        {item.label}
                                    </Text>
                                    {isSelected && (
                                        <Ionicons
                                            name="checkmark"
                                            size={20}
                                            color="#6366f1" // text-primary
                                        />
                                    )}
                                </TouchableOpacity>
                            );
                        }}
                    />
                </BottomSheetView>
            </BottomSheetModal>
        </View>
    );
};

const styles = StyleSheet.create({
    label: {
        fontSize: 16,
        fontWeight: '500',
        marginBottom: 8,
    },
    input: {
        borderWidth: 1,
        borderColor: '#d1d5db',
        borderRadius: 8,
        paddingHorizontal: 16,
        paddingVertical: 12,
        backgroundColor: 'white',
    },
    inputText: {
        color: '#111827',
    },
    modalBackground: {
        backgroundColor: 'white',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: -2 },
        shadowOpacity: 0.25,
        shadowRadius: 8,
        elevation: 10,
    },
    sheetContent: {
        paddingHorizontal: 16,
        paddingVertical: 8,
    },
    option: {
        paddingVertical: 12,
        borderBottomWidth: 1,
        borderBottomColor: '#e5e7eb',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    optionText: {
        fontSize: 16,
        color: '#111827',
    },
});

export default Select;
