import GradeLevels from "@/components/GradeLevels";
import NextPrev from "@/components/NextPrev";
import Progression from "@/components/ui/progression";

const TeachersGradeLevelPage: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Progression currentSection="demo-info" />
      <NextPrev
        prevLink="/teachers/gender"
        nextLink="/questionnaire/system-a"
      />
      <GradeLevels />
    </div>
  );
};

export default TeachersGradeLevelPage;
