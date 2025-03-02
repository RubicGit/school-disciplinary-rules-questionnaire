"use client"

import { ChevronLeft, ChevronRight } from 'lucide-react';
import Link from 'next/link';

interface NextPrevProps {
    onPrev: () => void;
    onNext: () => void;
    disablePrev: boolean;
    disableNext: boolean;
    nextPage: string;
    prevPage: string;
    finalPage: boolean;
}

const NextPrevQuestions: React.FC<NextPrevProps> = ({ onPrev, onNext, disablePrev, disableNext, nextPage, prevPage, finalPage }) => {
    console.log(finalPage);
    return (
                
        <div className='flex fixed top-0 h-screen w-screen justify-between -z-0'>
            {disablePrev ? (
                <Link href={prevPage}>
                    <div className="h-full flex justify-center items-center px-10">
                        <button
                            onClick={onPrev}
                            className="flex justify-center items-center rounded-full border-black border-2 z-1 cursor-pointer"
                        >
                            <ChevronLeft size='64' className='p-4' />
                        </button>
                    </div>
                </Link>
            ) : (
                <div className="h-full flex justify-center items-center px-10">
                    <button
                        onClick={onPrev}
                        disabled={disablePrev}
                        className="flex justify-center items-center rounded-full border-black border-2 z-1 cursor-pointer disabled:opacity-50"
                    >
                        <ChevronLeft size='64' className='p-4' />
                    </button>
                </div>
            )}
            {disableNext && finalPage ? (
                <Link href={nextPage}>
                    <div className="h-full flex justify-center items-center px-10">
                        <button
                            onClick={onNext}
                            className="flex justify-center items-center rounded-full border-black border-2 z-1 cursor-pointer"
                        >
                            <ChevronRight size='64' className='p-4' />
                        </button>
                    </div>
                </Link>
            ) : (
                <div className="h-full flex justify-center items-center px-10">
                    <button
                        onClick={onNext}
                        disabled={disableNext}
                        className="flex justify-center items-center rounded-full border-black border-2 z-1 cursor-pointer disabled:opacity-50"
                    >
                        <ChevronRight size='64' className='p-4' />
                    </button>
                </div>
            )}
        </div>
    );
};

export default NextPrevQuestions;