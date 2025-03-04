import TeacherOrStudent from "@/components/TeacherOrStudent";
import Progression from "@/components/ui/progression";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Progression currentSection="demo-info" />
      <TeacherOrStudent />
    </div>
  );
}
