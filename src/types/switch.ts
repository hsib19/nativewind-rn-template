export interface SwitchProps {
    checked: boolean;
    onChange?: (value: boolean) => void;
    disabled?: boolean;
    label?: string;
    size?: 'sm' | 'md' | 'lg';
    labelClassName?: string;
    color?: string;
    error?: string;
}
