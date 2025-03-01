import React from 'react';

const Progression = ({ currentSection }: { currentSection: 'demo-info' | 'questionnaire' }) => {
    return (
        <>
            {currentSection === 'demo-info' && (
                <div className='flex gap-12 absolute top-0 mx-auto items-center p-8 rounded-2xl'>
                    <div className="flex items-center gap-4">
                        <p className="text-sm text-secondary w-8 h-8 bg-secondary-50 p-2 my-4 rounded-sm leading-none flex justify-center items-center font-bold">1</p>
                        <p className="text-xl text-secondary font-medium">Demographic Information</p>
                    </div>
                    <div className="flex items-center gap-4">
                        <p className="text-sm text-secondary w-8 h-8 border-2 border-secondary-50 p-2 rounded-sm leading-none flex justify-center items-center font-bold">2</p>
                        <p className="text-xl">Questionnaire</p>
                    </div>
                </div>
            )}
            {currentSection === 'questionnaire' && (
                <div className='flex gap-12 absolute top-0 mx-auto items-center p-8 rounded-2xl'>
                    <div className="flex items-center gap-4">
                        <p className="text-sm text-bg w-8 h-8 bg-secondary p-2 my-4 rounded-sm leading-none flex justify-center items-center font-bold">1</p>
                        <p className="text-xl text-secondary font-medium">Demographic Information</p>
                    </div>
                    <div className="flex items-center gap-4">
                        <p className="text-sm text-secondary w-8 h-8 bg-secondary-50 p-2 rounded-sm leading-none flex justify-center items-center font-bold">2</p>
                        <p className="text-xl text-secondary font-medium">Questionnaire</p>
                    </div>
                </div>
            )}
        </>
    );
};

export default Progression;