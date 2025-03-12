import Progression from "@/components/ui/progression";
import Cancel from "@/components/Cancel";
import TeacherOrStudent from "@/components/TeacherOrStudent";
import { TeacherStudentProvider } from "@/context/EntryContext";

const StudentsOrTeacher: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Cancel />
      <Progression currentSection="demo-info" />
      <TeacherStudentProvider>
        <TeacherOrStudent />
      </TeacherStudentProvider>
    </div>
  );
};

export default StudentsOrTeacher;
