"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import { useTeacherStudent } from "@/context/EntryContext";

const GradeLevel = () => {
  const { gradeLevel, setGradeLevel } = useTeacherStudent(); // Use context to manage grade level
  const [selected, setSelected] = useState<
    "grade9" | "grade10" | "grade11" | "grade12" | null
  >(
    gradeLevel
      ? (gradeLevel as "grade9" | "grade10" | "grade11" | "grade12")
      : null
  ); // Initialize with context value

  const handleSelection = (
    grade: "grade9" | "grade10" | "grade11" | "grade12"
  ) => {
    setSelected(grade);
    setGradeLevel(grade); // Update context value
  };

  return (
    <div className="flex flex-col gap-12 z-1">
      <h1 className="text-6xl font-bold text-center max-w-1xl">
        What is your Grade Level?
      </h1>
      <div className="grid grid-cols-2 gap-4 justify-items-center">
        {(["grade9", "grade10", "grade11", "grade12"] as const).map((grade) => (
          <Button
            key={grade}
            variant="outline"
            className={`text-2xl border-2 text-text transition-all duration-300 group ${selected === grade ? "bg-secondary-50 border-secondary-50" : "border-text-50"}`}
            size="lg"
            onClick={() => handleSelection(grade)}
          >
            <div
              className={`flex items-center justify-center w-7 h-7 border-2 transition-all duration-300 rounded-md ${selected === grade ? "bg-secondary border-secondary-50" : "border-text-50 group-hover:border-secondary-50"}`}
            >
              {selected === grade && (
                <Check color="#f4fbfa" strokeWidth="3" size="32px" />
              )}
            </div>
            {`Grade ${grade.slice(5)}`}
          </Button>
        ))}
      </div>
    </div>
  );
};

export default GradeLevel;
