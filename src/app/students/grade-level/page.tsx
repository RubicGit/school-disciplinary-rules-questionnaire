import GradeLevel from "@/components/GradeLevel";
import NextPrev from "@/components/NextPrev";
import Progression from "@/components/ui/progression";
import Cancel from "@/components/Cancel";
import { TeacherStudentProvider } from "@/context/EntryContext";

const StudentsGradeLevelPage: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Cancel />
      <Progression currentSection="demo-info" />
      <TeacherStudentProvider>
        <NextPrev
          prevLink="/students/gender"
          nextLink="/questionnaire/system-a"
        />
        <GradeLevel />
      </TeacherStudentProvider>
    </div>
  );
};

export default StudentsGradeLevelPage;
