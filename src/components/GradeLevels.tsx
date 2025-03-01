"use client"

import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Check } from 'lucide-react';

const GradeLevels = () => {
    const [selected, setSelected] = useState<Set<'grade9' | 'grade10' | 'grade11' | 'grade12'>>(new Set());

    const toggleSelection = (grade: 'grade9' | 'grade10' | 'grade11' | 'grade12') => {
        setSelected(prevSelected => {
            const newSelected = new Set(prevSelected);
            if (newSelected.has(grade)) {
                newSelected.delete(grade);
            } else {
                newSelected.add(grade);
            }
            return newSelected;
        });
    };

    return (
        <div className='flex flex-col gap-12 z-1'>
            <h1 className='text-6xl font-bold text-center max-w-1xl'>What Grade Levels do you teach?</h1>
            <div className='grid grid-cols-2 gap-4 justify-items-center'>
                {(['grade9', 'grade10', 'grade11', 'grade12'] as const).map(grade => (
                    <Button
                        key={grade}
                        variant='outline'
                        className={`w-48 text-2xl border-2 text-text transition-all duration-300 group ${selected.has(grade) ? 'bg-secondary-50 border-secondary-50' : 'border-text-50'}`}
                        size='lg'
                        onClick={() => toggleSelection(grade)}
                    >
                        <div className={`flex items-center justify-center w-7 h-7 border-2 transition-all duration-300 rounded-md ${selected.has(grade) ? 'bg-secondary border-secondary-50' : 'border-text-50 group-hover:border-secondary-50'}`}>
                            {selected.has(grade) && <Check color='#f4fbfa' strokeWidth='3' size='32px' />}
                        </div>
                        {`Grade ${grade.slice(5)}`}
                    </Button>
                ))}
            </div>
        </div>
    );
};

export default GradeLevels;