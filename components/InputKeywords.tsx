"use client";

import { useState, ChangeEvent, KeyboardEvent } from "react";
import styles from './InputKeywords.module.css';

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
        <div style={{ maxWidth: 400 }}>
            <input 
                type="text" 
                value={valueTyped} 
                onChange={handleChange}
                onKeyDown={handleKeyDown} 
                placeholder="Digite palavras as chaves..."
                className={styles.inputField}
            />
           <div className={styles.valueDisplayedBox}>
                {valueDisplayed.map((value, index) => (
                    <span key={index} className= {styles.valueDisplayed}>
                        {value}
                    </span>
                ))}
           </div>
        </div>
    );
}