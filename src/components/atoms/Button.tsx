import { twMerge } from 'tailwind-merge';

interface ButtonProps {
    color?: keyof typeof colorClassName;
    size?: keyof typeof sizeClassName;
    label?: string;
    className?: string;
}

const colorClassName = {
    primary: 'text-white bg-my-color-1 border-gray-400',
    secondary: 'text-white bg-my-color-2 border-gray-700',
} as const;

const sizeClassName = {
    sm: 'min-w-16 h-8 text-sm',
    lg: 'min-w-28 h-16 text-lg',
} as const;

export default function Button({ color, size, label, className }: ButtonProps) {
    const mergeClassName = twMerge('border-2', color && colorClassName[color], size && sizeClassName[size], className);
    return <button className={mergeClassName}>{label}</button>;
}
