import NextPrev from "@/components/NextPrev";
import Progression from '@/components/ui/progression';

const Questionnaire: React.FC = () => {
    return (
        <div className='flex flex-col items-center justify-center min-h-screen py-2'>
            <Progression currentSection="questionnaire"/>
            <NextPrev prevLink="/students/grade-level" nextLink="/questionnaire" />
        </div>
    );
};

export default Questionnaire;