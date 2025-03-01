"use client"

import Link from 'next/link';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface NextPrevProps {
    prevLink: string;
    nextLink: string;
}

const NextPrev: React.FC<NextPrevProps> = ({ prevLink, nextLink }) => {
    return (
        <div className='flex absolute h-screen w-screen justify-between  -z-0'>
            <Link href={prevLink}>
                <div className="h-full flex justify-center items-center px-10">
                    <div className="flex justify-center items-center rounded-full border-black border-2 z-1 cursor-pointer">
                        <ChevronLeft size='64' className='p-4' />
                    </div>
                </div>
            </Link>
            <Link href={nextLink}>
                <div className="h-full flex justify-center items-center px-10">
                    <div className="flex justify-center items-center rounded-full border-black border-2 z-1 cursor-pointer">
                        <ChevronRight size='64' className='p-4' />
                    </div>
                </div>
            </Link>
        </div>
    );
};

export default NextPrev;