import { ButtonHTMLAttributes } from "react";

export function Button({ className, ...props }: ButtonHTMLAttributes<HTMLButtonElement>) {
    return (
        <button
            className={`
                bg-blue-600 text-white font-semibold px-4 py-2 rounded-lg
                hover:bg-blue-700 transition duration-200
                disabled:opacity-50 disabled:cursor-not-allowed
                ${className || ''}
            `}
            {...props}
        />
    );
}