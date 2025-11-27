"use client";

import { useState, ChangeEvent, KeyboardEvent } from "react";
import { Input } from "./ui/Input";

export default function InputKeywords() {
    const [valueTyped, setValueTyped] = useState<string>('');
    const [valueDisplayed, setValueDisplayed] = useState<string[]>([]);

    function handleChange(event: ChangeEvent<HTMLInputElement>) {
        setValueTyped(event.target.value);
    }

    function handleKeyDown(event: KeyboardEvent<HTMLInputElement>) {
        if (event.key === 'Enter' && valueTyped.trim() !== '') {
            event.preventDefault();
            setValueDisplayed((prev) => [...prev, valueTyped.trim()]);
            setValueTyped('');
        }
    }

    return (
        <div className="max-w-[400px]">
            <Input
                value={valueTyped}
                onChange={handleChange}
                onKeyDown={handleKeyDown}
                placeholder="Digite palavras chaves..."
            />
            <div className="mt-3">
                {valueDisplayed.map((value, index) => (
                    <span
                        key={index}
                        className="mr-2 mb-2 px-2 py-1 border border-gray-300 rounded inline-block bg-gray-50 text-sm text-gray-700"
                    >
                        {value}
                    </span>
                ))}
            </div>
        </div>
    );
}