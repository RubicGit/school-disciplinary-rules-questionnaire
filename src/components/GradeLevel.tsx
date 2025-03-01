"use client"

import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Check } from 'lucide-react';

const GradeLevel = () => {
    const [selected, setSelected] = useState<'grade9' | 'grade10' | 'grade11' | 'grade12' | null>(null);

    return (
        <div className='flex flex-col gap-12 z-1'>
            <h1 className='text-6xl font-bold text-center max-w-1xl'>What is your Grade Level?</h1>
            <div className='grid grid-cols-2 gap-4 justify-items-center'>
                <Button
                    variant='outline'
                    className={`text-2xl border-2 text-text transition-all duration-300 group ${selected === 'grade9' ? 'bg-secondary-50 border-secondary-50' : 'border-text-50'}`}
                    size='lg'
                    onClick={() => setSelected('grade9')}
                >
                    <div className={`flex items-center justify-center w-7 h-7 border-2 transition-all duration-300 rounded-md ${selected === 'grade9' ? 'bg-secondary border-secondary-50' : 'border-text-50 group-hover:border-secondary-50'}`}>
                        {selected === 'grade9' && <Check color='#f4fbfa' strokeWidth='3' size='32px' />}
                    </div>
                    Grade 9
                </Button>
                <Button
                    variant='outline'
                    className={`text-2xl border-2 text-text transition-all duration-300 group ${selected === 'grade10' ? 'bg-secondary-50 border-secondary-50' : 'border-text-50'}`}
                    size='lg'
                    onClick={() => setSelected('grade10')}
                >
                    <div className={`flex items-center justify-center w-7 h-7 border-2 transition-all duration-300 rounded-md ${selected === 'grade10' ? 'bg-secondary border-secondary-50' : 'border-text-50 group-hover:border-secondary-50'}`}>
                        {selected === 'grade10' && <Check color='#f4fbfa' strokeWidth='3' size='32px' />}
                    </div>
                    Grade 10
                </Button>
                <Button
                    variant='outline'
                    className={`text-2xl border-2 text-text transition-all duration-300 group ${selected === 'grade11' ? 'bg-secondary-50 border-secondary-50' : 'border-text-50'}`}
                    size='lg'
                    onClick={() => setSelected('grade11')}
                >
                    <div className={`flex items-center justify-center w-7 h-7 border-2 transition-all duration-300 rounded-md ${selected === 'grade11' ? 'bg-secondary border-secondary-50' : 'border-text-50 group-hover:border-secondary-50'}`}>
                        {selected === 'grade11' && <Check color='#f4fbfa' strokeWidth='3' size='32px' />}
                    </div>
                    Grade 11
                </Button>
                <Button
                    variant='outline'
                    className={`text-2xl border-2 text-text transition-all duration-300 group ${selected === 'grade12' ? 'bg-secondary-50 border-secondary-50' : 'border-text-50'}`}
                    size='lg'
                    onClick={() => setSelected('grade12')}
                >
                    <div className={`flex items-center justify-center w-7 h-7 border-2 transition-all duration-300 rounded-md ${selected === 'grade12' ? 'bg-secondary border-secondary-50' : 'border-text-50 group-hover:border-secondary-50'}`}>
                        {selected === 'grade12' && <Check color='#f4fbfa' strokeWidth='3' size='32px' />}
                    </div>
                    Grade 12
                </Button>
            </div>
        </div>
    );
};

export default GradeLevel;