"use client"

import React, { useState } from 'react';
import NextPrevQuestions from "@/components/NextPrevQuestions";
import Questionnaire from "@/components/Questionnaire";
import Progression from '@/components/ui/progression';

const QuestionnairePage: React.FC = () => {
    const [currentQuestion, setCurrentQuestion] = useState(0);

    const handleNext = () => {
        setCurrentQuestion(prev => (prev < 4 ? prev + 1 : prev));
    };

    const handlePrevious = () => {
        setCurrentQuestion(prev => (prev > 0 ? prev - 1 : prev));
    };
    
    console.log(currentQuestion);

    return (
        <div className='flex flex-col items-center justify-center min-h-screen py-2 overflow-hidden'>
            <Progression currentSection="questionnaire" />
            <NextPrevQuestions
                onPrev={handlePrevious}
                onNext={handleNext}
                disablePrev={currentQuestion === 0}
                disableNext={currentQuestion >= 4}
                nextPage="/questionnaire/system-d"
                prevPage='/questionnaire/system-b'
                finalPage={currentQuestion >= 4}
            />
            <Questionnaire currentQuestion={currentQuestion} questionType='system-c' nextUp={handleNext}/>
        </div>
    );
};

export default QuestionnairePage;
