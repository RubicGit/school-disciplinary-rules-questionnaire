"use client"

import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Check } from 'lucide-react';

const TeacherOrStudent = () => {
    const [selected, setSelected] = useState<'teacher' | 'student'>();

    return (
        <div className='flex flex-col gap-10'>
            <h1 className='text-6xl font-bold text-center'>Are you a Teacher or a Student?</h1>
            <div className='flex justify-around items-center'>
                <Button
                    variant='outline'
                    className={`text-2xl border-2 group ${selected === 'teacher' ? 'bg-secondary-50 border-secondary-50' : 'border-text-50'}`}
                    size='lg'
                    onClick={() => setSelected('teacher')}
                >
                    <div className={`flex items-center justify-center w-7 h-7 border-2 rounded-md ${selected === 'teacher' ? 'bg-secondary border-secondary-50' : 'border-text-50 group-hover:border-secondary-50'}`}>
                        {selected === 'teacher' && <Check color='#f4fbfa' strokeWidth='3' size='32px' />}
                    </div>
                    Teacher
                </Button>
                <Button
                    variant='outline'
                    className={`text-2xl border-2 group ${selected === 'student' ? 'bg-secondary-50 border-secondary-50' : 'border-text-50'}`}
                    size='lg'
                    onClick={() => setSelected('student')}
                >
                    <div className={`flex items-center justify-center w-7 h-7 border-2 rounded-md ${selected === 'student' ? 'bg-secondary border-secondary-50' : 'border-text-50 group-hover:border-secondary-50'}`}>
                        {selected === 'student' && <Check color='#f4fbfa' strokeWidth='3' size='32px' />}
                    </div>
                    Student
                </Button>
            </div>
        </div>
    );
};

export default TeacherOrStudent;