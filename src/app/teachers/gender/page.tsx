import Gender from "@/components/Gender";
import NextPrev from "@/components/NextPrev";
import Progression from "@/components/ui/progression";
import Cancel from "@/components/Cancel";
import { TeacherStudentProvider } from "@/context/EntryContext";

const TeachersGenderPage: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Cancel />
      <Progression currentSection="demo-info" />
      <TeacherStudentProvider>
        <NextPrev
          prevLink="/teacher-student"
          nextLink="/teachers/grade-levels"
        />
        <Gender />
      </TeacherStudentProvider>
    </div>
  );
};

export default TeachersGenderPage;
