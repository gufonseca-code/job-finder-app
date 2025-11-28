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
        <div className="w-full">
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
                        className="mr-2 mb-2 px-3 py-1 rounded-full text-sm font-medium border inline-block transition-colors
                                   bg-gray-100 text-gray-700 border-gray-200
                                   dark:bg-[#09363d] dark:text-(--primary) dark:border-[#134E48]"
                    >
                        {value}
                    </span>
                ))}
            </div>
        </div>
    );
}