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
        if (!selectedDate) {return;}

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

    const boxClass = `flex-1 flex-row items-center rounded-lg border border-gray-300 bg-white px-4 py-3 ${iconPosition === 'right' ? 'justify-between' : 'justify-start'
        }`;

    return (
        <View className="w-full">
            {label && (
                <Text className="mb-2 text-base font-medium text-gray-700">{label}</Text>
            )}

            <View className="flex-row space-x-3">
                {/* Start Date Picker */}
                <Pressable onPress={() => setPickerType('start')} className={boxClass}>
                    {iconPosition === 'left' && (
                        <Icon name="calendar" size={20} color="#6B7280" className="mr-2" />
                    )}
                    <Text className="text-gray-900 flex-1">
                        {dayjs(startDate).format(dateFormat)}
                    </Text>
                    {iconPosition === 'right' && (
                        <Icon name="calendar" size={20} color="#6B7280" />
                    )}
                </Pressable>

                {/* End Date Picker */}
                <Pressable onPress={() => setPickerType('end')} className={boxClass}>
                    {iconPosition === 'left' && (
                        <Icon name="calendar" size={20} color="#6B7280" className="mr-2" />
                    )}
                    <Text className="text-gray-900 flex-1">
                        {dayjs(endDate).format(dateFormat)}
                    </Text>
                    {iconPosition === 'right' && (
                        <Icon name="calendar" size={20} color="#6B7280" />
                    )}
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
