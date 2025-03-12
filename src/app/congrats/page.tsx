import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const CongratsPage: React.FC = () => {
  return (
    <div className="w-screen h-screen flex flex-col items-center justify-center gap-16">
      <h1 className="text-6xl font-extrabold my-4">Congratulations!</h1>
      <div className="flex gap-2 flex-col justify-center items-center">
        <p className="text-2xl">Thank you for completing the questionnaire.</p>
        <p className="text-2xl">Your responses have been recorded.</p>
      </div>
      <div className="flex items-center justify-center gap-12">
        <Link href="/teacher-student">
          <Button
            variant="default"
            className={`text-2xl border-2 text-text transition-all duration-300 text-center flex items-center justify-center`}
            size="md"
          >
            New Entry
          </Button>
        </Link>
        <Link href="/dashboard">
          <Button
            variant="outline"
            className={`text-2xl border-2 text-text transition-all duration-300 text-center flex items-center justify-center`}
            size="md"
          >
            Dashboard
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default CongratsPage;
