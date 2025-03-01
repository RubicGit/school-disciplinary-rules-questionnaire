import GradeLevel from "@/components/GradeLevel";
import NextPrev from "@/components/NextPrev";
import Progression from '@/components/ui/progression';

const StudentsGradeLevelPage: React.FC = () => {
    return (
        <div className='flex flex-col items-center justify-center min-h-screen py-2'>
            <Progression currentSection="demo-info"/>
            <NextPrev prevLink="/students/gender" nextLink="/questionnaire" />
            <GradeLevel />
        </div>
    );
};

export default StudentsGradeLevelPage;