export type RadioButtonProps = {
    label?: string;
    selected: boolean;
    onPress: () => void;
    disabled?: boolean;
    size?: 'sm' | 'md' | 'lg';
    labelClassName?: string;
    error?: string;
    color?: string;
};
