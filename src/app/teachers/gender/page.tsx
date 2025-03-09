import Gender from "@/components/Gender";
import NextPrev from "@/components/NextPrev";
import Progression from "@/components/ui/progression";
import Cancel from "@/components/Cancel";

const TeachersGenderPage: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Cancel />
      <Progression currentSection="demo-info" />
      <NextPrev prevLink="/" nextLink="/teachers/grade-levels" />
      <Gender />
    </div>
  );
};

export default TeachersGenderPage;
