import { useState } from 'react';
import { View, Text, Pressable, Platform } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import dayjs from 'dayjs';
import 'dayjs/locale/id';
import Icon from 'react-native-vector-icons/Feather';

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
        <View style={{ width: '100%' }}>
            {label && (
                <Text style={{ marginBottom: 8, fontSize: 16, fontWeight: '500', color: '#374151' }}>
                    {label}
                </Text>
            )}
            <Pressable
                onPress={() => setShowPicker(true)}
                style={{
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
                    <Icon name="clock" size={20} color="#6B7280" style={{ marginRight: 8 }} />
                )}
                <Text style={{ color: '#1F2937', flex: 1 }}>
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
