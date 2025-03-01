"use client"

import React, { useState } from 'react';
import { Input } from "@/components/ui/input"

const Age = () => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [age, setAge] = useState<number | null>(null);
    const [error, setError] = useState<string | null>(null);

    const handleAgeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = parseInt(e.target.value, 10);
        if (isNaN(value) || value < 13 || value > 20) {
            setError('Please enter a valid age between 13 and 20.');
            setAge(null);
        } else {
            setError(null);
            setAge(value);
        }
    };

    return (
        <div className='flex flex-col gap-12 justify-center z-1'>
            <h1 className='text-6xl font-bold text-center max-w-1xl'>What is your age?</h1>
            <div className='flex justify-center items-center'>
                <Input
                    type='number'
                    className='px-3 py-2 border-2 text-text transition-all duration-300'
                    placeholder='Enter your age'
                    onChange={handleAgeChange}
                />
            </div>
            {error && <p className='text-red-500 text-center absolute bottom-48 left-[50%] -translate-x-1/2'>{error}</p>}
        </div>
    );
};

export default Age;
