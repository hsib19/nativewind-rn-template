import { useState } from 'react';
import { View, Text, Pressable, Platform } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import dayjs from 'dayjs';
import 'dayjs/locale/id';
import Icon from 'react-native-vector-icons/Feather';

type Props = {
    label?: string;
    locale?: string;
    initialStartDate?: Date;
    initialEndDate?: Date;
    onRangeChange?: (range: { startDate: Date; endDate: Date }) => void;
    iconPosition?: 'left' | 'right';
    dateFormat?: string;
};

export default function DateRangePicker({
    label,
    locale = 'id',
    initialStartDate = new Date(),
    initialEndDate = new Date(),
    onRangeChange,
    iconPosition = 'right',
    dateFormat = 'D/MM/YYYY',
}: Props) {
    const [startDate, setStartDate] = useState<Date>(initialStartDate);
    const [endDate, setEndDate] = useState<Date>(initialEndDate);
    const [pickerType, setPickerType] = useState<'start' | 'end' | null>(null);

    const showPicker = pickerType !== null;

    const onChange = (_event: any, selectedDate?: Date) => {
        if (!selectedDate) return;

        const isStart = pickerType === 'start';

        const newStartDate = isStart ? selectedDate : startDate;
        const newEndDate = isStart ? endDate : selectedDate;

        if (isStart) {
            setStartDate(selectedDate);
        } else {
            setEndDate(selectedDate);
        }

        setPickerType(null);
        onRangeChange?.({ startDate: newStartDate, endDate: newEndDate });
    };

    dayjs.locale(locale);

    return (
        <View style={{ width: '100%' }}>
            {label && (
                <Text style={{ marginBottom: 8, fontSize: 16, fontWeight: '500', color: '#374151' }}>
                    {label}
                </Text>
            )}
            <View style={{ flexDirection: 'row', gap: 12 }}>
                <Pressable
                    onPress={() => setPickerType('start')}
                    style={{
                        flex: 1,
                        borderWidth: 1,
                        borderColor: '#D1D5DB',
                        borderRadius: 8,
                        paddingVertical: 12,
                        paddingHorizontal: 16,
                        backgroundColor: '#FFFFFF',
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: iconPosition === 'right' ? 'space-between' : 'flex-start',
                    }}
                >
                    {iconPosition === 'left' && (
                        <Icon name="calendar" size={20} color="#6B7280" style={{ marginRight: 8 }} />
                    )}
                    <Text style={{ color: '#1F2937', flex: 1 }}>
                        {dayjs(startDate).format(dateFormat)}
                    </Text>
                    {iconPosition === 'right' && <Icon name="calendar" size={20} color="#6B7280" />}
                </Pressable>

                <Pressable
                    onPress={() => setPickerType('end')}
                    style={{
                        flex: 1,
                        borderWidth: 1,
                        borderColor: '#D1D5DB',
                        borderRadius: 8,
                        paddingVertical: 12,
                        paddingHorizontal: 16,
                        backgroundColor: '#FFFFFF',
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: iconPosition === 'right' ? 'space-between' : 'flex-start',
                    }}
                >
                    {iconPosition === 'left' && (
                        <Icon name="calendar" size={20} color="#6B7280" style={{ marginRight: 8 }} />
                    )}
                    <Text style={{ color: '#1F2937', flex: 1 }}>
                        {dayjs(endDate).format(dateFormat)}
                    </Text>
                    {iconPosition === 'right' && <Icon name="calendar" size={20} color="#6B7280" />}
                </Pressable>
            </View>

            {showPicker && (
                <DateTimePicker
                    value={pickerType === 'start' ? startDate : endDate}
                    mode="date"
                    display={Platform.OS === 'ios' ? 'spinner' : 'default'}
                    onChange={onChange}
                />
            )}
        </View>
    );
}
