"use client";

import { createContext, useContext, useState, ReactNode } from "react";

interface TeacherStudentContextProps {
  role: "teacher" | "student";
  setRole: (role: "teacher" | "student") => void;
  age: number;
  setAge: (age: number) => void;
  gender: "male" | "female";
  setGender: (gender: "male" | "female") => void;
  gradeLevel: string;
  setGradeLevel: (gradeLevel: string) => void;
  grades: string[];
  setGrades: (grades: string[]) => void;
}

const TeacherStudentContext = createContext<
  TeacherStudentContextProps | undefined
>(undefined);

export const TeacherStudentProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [role, setRole] = useState<"teacher" | "student">("student");
  const [age, setAge] = useState<number>(0);
  const [gender, setGender] = useState<"male" | "female">("male");
  const [gradeLevel, setGradeLevel] = useState("");
  const [grades, setGrades] = useState<string[]>([]);

  return (
    <TeacherStudentContext.Provider
      value={{
        role,
        setRole,
        age,
        setAge,
        gender,
        setGender,
        gradeLevel,
        setGradeLevel,
        grades,
        setGrades,
      }}
    >
      {children}
    </TeacherStudentContext.Provider>
  );
};

export const useTeacherStudent = (): TeacherStudentContextProps => {
  const context = useContext(TeacherStudentContext);
  if (context === undefined) {
    throw new Error(
      "useTeacherStudent must be used within a TeacherStudentProvider"
    );
  }
  return context;
};
