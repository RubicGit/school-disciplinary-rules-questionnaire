import GradeLevels from "@/components/GradeLevels";
import NextPrev from "@/components/NextPrev";
import Progression from "@/components/ui/progression";
import Cancel from "@/components/Cancel";
import { TeacherStudentProvider } from "@/context/EntryContext";

const TeachersGradeLevelPage: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Cancel />
      <Progression currentSection="demo-info" />
      <TeacherStudentProvider>
        <NextPrev
          prevLink="/teachers/gender"
          nextLink="/questionnaire/system-a"
        />
        <GradeLevels />
      </TeacherStudentProvider>
    </div>
  );
};

export default TeachersGradeLevelPage;
