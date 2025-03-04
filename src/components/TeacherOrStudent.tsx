"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import Link from "next/link";

const TeacherOrStudent = () => {
  const [selected, setSelected] = useState<"teacher" | "student" | null>(null);

  return (
    <div className="flex flex-col gap-12">
      <h1 className="text-6xl font-bold text-center max-w-1xl">
        Are you a Teacher or a Student?
      </h1>
      <div className="flex justify-around items-center">
        <Link href="teachers/gender">
          <Button
            variant="outline"
            className={`text-2xl border-2 text-text transition-all duration-300 group ${selected === "teacher" ? "bg-secondary-50 border-secondary-50" : "border-text-50"}`}
            size="lg"
            onClick={() => setSelected("teacher")}
          >
            <div
              className={`flex items-center justify-center w-7 h-7 border-2 transition-all duration-300 rounded-md ${selected === "teacher" ? "bg-secondary border-secondary-50" : "border-text-50 group-hover:border-secondary-50"}`}
            >
              {selected === "teacher" && (
                <Check color="#f4fbfa" strokeWidth="3" size="32px" />
              )}
            </div>
            Teacher
          </Button>
        </Link>
        <Link href="/students/age">
          <Button
            variant="outline"
            className={`text-2xl border-2 text-text transition-all duration-300 group ${selected === "student" ? "bg-secondary-50 border-secondary-50" : "border-text-50"}`}
            size="lg"
            onClick={() => setSelected("student")}
          >
            <div
              className={`flex items-center justify-center w-7 h-7 border-2 transition-all duration-300 rounded-md ${selected === "student" ? "bg-secondary border-secondary-50" : "border-text-50 group-hover:border-secondary-50"}`}
            >
              {selected === "student" && (
                <Check color="#f4fbfa" strokeWidth="3" size="32px" />
              )}
            </div>
            Student
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default TeacherOrStudent;
