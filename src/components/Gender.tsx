"use client"

import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Check } from 'lucide-react';

const Gender = () => {
    const [selected, setSelected] = useState<'male' | 'female' | null>(null);

    return (
        <div className='flex flex-col gap-12 z-1'>
            <h1 className='text-6xl font-bold text-center max-w-1xl'>Are you a Male or a Female?</h1>
            <div className='flex justify-around items-center'>
                <Button
                    variant='outline'
                    className={`text-2xl border-2 text-text transition-all duration-300 group ${selected === 'male' ? 'bg-secondary-50 border-secondary-50' : 'border-text-50'}`}
                    size='lg'
                    onClick={() => setSelected('male')}
                >
                    <div className={`flex items-center justify-center w-7 h-7 border-2 transition-all duration-300 rounded-md ${selected === 'male' ? 'bg-secondary border-secondary-50' : 'border-text-50 group-hover:border-secondary-50'}`}>
                        {selected === 'male' && <Check color='#f4fbfa' strokeWidth='3' size='32px' />}
                    </div>
                    Male
                </Button>
                <Button
                    variant='outline'
                    className={`text-2xl border-2 text-text transition-all duration-300 group ${selected === 'female' ? 'bg-secondary-50 border-secondary-50' : 'border-text-50'}`}
                    size='lg'
                    onClick={() => setSelected('female')}
                >
                    <div className={`flex items-center justify-center w-7 h-7 border-2 transition-all duration-300 rounded-md ${selected === 'female' ? 'bg-secondary border-secondary-50' : 'border-text-50 group-hover:border-secondary-50'}`}>
                        {selected === 'female' && <Check color='#f4fbfa' strokeWidth='3' size='32px' />}
                    </div>
                    Female
                </Button>                    
            </div>
        </div>
    );
};

export default Gender;