import { Dispatch, SetStateAction } from 'react';

interface AlertProps {
    message?: string;
    type?: 'error' | 'success' | 'warning' | 'info';
    // Props antiguos para mantener compatibilidad
    value?: string;
    setValue?: Dispatch<SetStateAction<string>>;
    color?: string;
}

export default function Alert({ message, type, value, color }: AlertProps) {
    // Si se usa el nuevo formato (message + type)
    if (message && type) {
        const bgColor = {
            error: 'bg-red-500',
            success: 'bg-green-500',
            warning: 'bg-yellow-500',
            info: 'bg-blue-500'
        }[type];

        return (
            <div className={`${bgColor} text-white p-4 rounded-lg mb-4`}>
                {message}
            </div>
        );
    }

    // Si se usa el formato antiguo (value + color)
    if (value && color) {
        return (
            <div className={`${color} text-white p-4 rounded-lg mb-4`}>
                {value}
            </div>
        );
    }

    return null;
}
