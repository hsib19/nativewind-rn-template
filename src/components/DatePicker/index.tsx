import { useState } from 'react';
import { View, Text, Pressable, Platform } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import dayjs from 'dayjs';
import 'dayjs/locale/id';
import Icon from 'react-native-vector-icons/Feather';

type Props = {
    label?: string;
    locale?: string;
    initialDate?: Date;
    onDateChange?: (date: Date) => void;
    iconPosition?: 'left' | 'right';
    dateFormat?: string;
};

export default function DatePicker({
    label,
    locale = 'id',
    initialDate = new Date(),
    onDateChange,
    iconPosition = 'right',
    dateFormat = 'D/MM/YYYY',
}: Props) {
    const [date, setDate] = useState<Date>(initialDate);
    const [showPicker, setShowPicker] = useState(false);

    const onChange = (_event: any, selectedDate?: Date) => {
        setShowPicker(Platform.OS === 'ios');
        if (selectedDate) {
            setDate(selectedDate);
            onDateChange?.(selectedDate);
        }
    };

    dayjs.locale(locale);

    return (
        <View className="w-full">
            {label && (
                <Text className="mb-2 text-base font-medium text-gray-700">
                    {label}
                </Text>
            )}

            <Pressable
                onPress={() => setShowPicker(true)}
                className={`flex-row items-center rounded-lg border border-gray-300 bg-white px-4 py-3 ${iconPosition === 'right' ? 'justify-between' : 'justify-start'
                    }`}
            >
                {iconPosition === 'left' && (
                    <Icon name="calendar" size={20} color="#6B7280" className="mr-2" />
                )}

                <Text className="text-gray-900 flex-1">
                    {dayjs(date).format(dateFormat)}
                </Text>

                {iconPosition === 'right' && (
                    <Icon name="calendar" size={20} color="#6B7280" />
                )}
            </Pressable>

            {showPicker && (
                <DateTimePicker
                    value={date}
                    mode="date"
                    display={Platform.OS === 'ios' ? 'spinner' : 'default'}
                    onChange={onChange}
                />
            )}
        </View>
    );
}
