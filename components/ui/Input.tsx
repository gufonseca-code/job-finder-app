import { InputHTMLAttributes } from "react";

export function Input({ className, ...props }: InputHTMLAttributes<HTMLInputElement>) {
    return (
        <input
            className={`
                w-full px-4 py-3 rounded-lg outline-none transition-all
                bg-(--card) text-(--foreground) border border-(--border)
                focus:ring-2 focus:ring-(--primary) focus:border-transparent
                placeholder:text-gray-400 dark:placeholder:text-gray-500
                ${className || ''}
            `}
            {...props}
        />
    );
}