export interface CheckboxProps {
    label?: string;
    error?: string;
    checked: boolean;
    onChange: (value: boolean) => void;
    size?: 'sm' | 'md' | 'lg';
    disabled?: boolean;
}
