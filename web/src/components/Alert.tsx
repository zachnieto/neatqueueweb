import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import { delay } from '../util/utility';
import { classNames } from '../util/tailwind';

interface AlertProps {
    message: string;
    type: 'error' | 'success' | 'warning' | 'info';
}

export default function Alert({ message, type }: AlertProps) {
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
