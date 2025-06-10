import { useState } from 'react';
import {
    View,
    Text,
    Pressable,
    Platform,
    StyleSheet,
} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import dayjs from 'dayjs';
import 'dayjs/locale/id';
import Icon from 'react-native-vector-icons/Feather';
import { cn } from '@/lib/utils';

type Props = {
    label?: string;
    locale?: string;
    initialTime?: Date;
    onTimeChange?: (time: Date) => void;
    iconPosition?: 'left' | 'right';
    timeFormat?: string;
};

export default function TimePicker({
    label,
    locale = 'id',
    initialTime = new Date(),
    onTimeChange,
    iconPosition = 'right',
    timeFormat = 'HH:mm',
}: Props) {
    const [time, setTime] = useState<Date>(initialTime);
    const [showPicker, setShowPicker] = useState(false);

    const onChange = (_event: any, selectedTime?: Date) => {
        setShowPicker(Platform.OS === 'ios');
        if (selectedTime) {
            setTime(selectedTime);
            onTimeChange?.(selectedTime);
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
                className={cn(
                    'border border-gray-300 rounded-lg px-4 py-3 bg-white flex-row items-center',
                    iconPosition === 'right' ? 'justify-between' : 'justify-start'
                )}
            >
                {iconPosition === 'left' && (
                    <Icon name="clock" size={20} color="#6B7280" style={styles.iconMargin} />
                )}
                <Text className="flex-1 text-gray-800">
                    {dayjs(time).format(timeFormat)}
                </Text>
                {iconPosition === 'right' && (
                    <Icon name="clock" size={20} color="#6B7280" />
                )}
            </Pressable>

            {showPicker && (
                <DateTimePicker
                    value={time}
                    mode="time"
                    display={Platform.OS === 'ios' ? 'spinner' : 'default'}
                    onChange={onChange}
                />
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    inputContainer: {
        borderWidth: 1,
        borderColor: '#D1D5DB',
        borderRadius: 8,
        paddingVertical: 12,
        paddingHorizontal: 16,
        backgroundColor: '#FFFFFF',
        flexDirection: 'row',
        alignItems: 'center',
    },
    iconMargin: {
        marginRight: 8,
    },
});
