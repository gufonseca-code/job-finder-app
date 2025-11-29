"use client";

import { useState, ChangeEvent, KeyboardEvent, useRef } from "react";

export default function InputKeywords() {
    const [inputValue, setInputValue] = useState<string>('');
    const [tags, setTags] = useState<string[]>([]);

    const inputRef = useRef<HTMLInputElement>(null);

    function handleChange(event: ChangeEvent<HTMLInputElement>) {
        setInputValue(event.target.value);
    }

    function handleKeyDown(event: KeyboardEvent<HTMLInputElement>) {
        const trimmedValue = inputValue.trim();

        if (event.key ==='Enter' && trimmedValue !== '') {
            event.preventDefault();

            if (!tags.includes(trimmedValue)) {
                setTags((prev) => [...prev, trimmedValue]);
            }
            setInputValue('');
        }

        if (event.key ==='Backspace' && inputValue === '' && tags.length > 0) {
            event.preventDefault();
            const newTags = [...tags];
            newTags.pop();
            setTags(newTags);
        }
    }

    function removeTag(indexToRemove: number) {
        setTags(tags.filter((_, index) => index !== indexToRemove));
    }

    return (
        <div
            className="w-full min-h-[50px] p-2 rounded-lg border flex flex-wrap gap-2 items-center cursor-text transition-all
                       bg-(--card) border-(--border)
                       focus-within:ring-2 focus-within:ring-(--primary) focus-within:border-transparent"
            onClick={() => inputRef.current?.focus()}
        >
            {tags.map((tag, index) => (
                <span
                    key={index}
                    className="flex items-center gap-1 px-3 py-1 rounded-full text-sm font-medium border animate-in fade-in zoom-in duration-200
                               bg-gray-100 text-gray-700 border-gray-200
                               dark:bg-[#09363d] dark:text-(--primary) dark:border-[#134E48]"
                >
                    {tag}
                    <button
                        type="button"
                        onClick={(e) => {
                            e.stopPropagation();
                            removeTag(index);
                        }}
                        className="ml-1 hover:text-red-500 focus:outline-none font-bold"
                    >
                        &times;
                    </button>
                </span>
            ))}

            <input
                ref={inputRef}
                type="text"
                value={inputValue}
                onChange={handleChange}
                onKeyDown={handleKeyDown}
                placeholder={tags.length === 0 ? "Digite palavras-chaves..." : ""}
                className="flex-1 min-w-[120px] bg-transparent outline-none text-(--foreground) placeholder:text-gray-400 dark:placeholder:text-gray-500 h-8"
            />
        </div>
    );
}