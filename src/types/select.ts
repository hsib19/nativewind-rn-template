export interface SelectProps {
    label?: string;
    value?: string | number;
    onChange: (value: string | number) => void;
    options: { label: string; value: string | number }[];
    placeholder?: string;
    disabled?: boolean;
    labelClassName?: string;
    size?: 'sm' | 'md' | 'lg';
    color?: string;
}
