import Gender from "@/components/Gender";
import NextPrev from "@/components/NextPrev";
import Progression from "@/components/ui/progression";
import Cancel from "@/components/Cancel";

const StudentsGenderPage: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Cancel />
      <Progression currentSection="demo-info" />
      <NextPrev prevLink="/students/age" nextLink="/students/grade-level" />
      <Gender />
    </div>
  );
};

export default StudentsGenderPage;
