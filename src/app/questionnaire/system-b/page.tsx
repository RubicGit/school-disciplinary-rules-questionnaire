"use client";

import React, { useState } from "react";
import NextPrevQuestions from "@/components/NextPrevQuestions";
import Questionnaire from "@/components/Questionnaire";
import Progression from "@/components/ui/progression";
import Cancel from "@/components/Cancel";
import { QuestionnaireProvider } from "@/context/QuestionnaireContext";

const QuestionnairePage: React.FC = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);

  const handleNext = () => {
    setCurrentQuestion((prev) => (prev < 4 ? prev + 1 : prev));
  };

  const handlePrevious = () => {
    setCurrentQuestion((prev) => (prev > 0 ? prev - 1 : prev));
  };

  console.log(currentQuestion);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 overflow-hidden">
      <Cancel />
      <Progression currentSection="questionnaire" />
      <QuestionnaireProvider>
        <NextPrevQuestions
          onPrev={handlePrevious}
          onNext={handleNext}
          disablePrev={currentQuestion === 0}
          disableNext={currentQuestion >= 4}
          nextPage="/questionnaire/system-c"
          prevPage="/questionnaire/system-a"
          finalPage={currentQuestion >= 4}
        />
        <Questionnaire
          currentQuestion={currentQuestion}
          questionType="system-b"
          nextUp={handleNext}
          nextPage="/questionnaire/system-c"
        />
      </QuestionnaireProvider>
    </div>
  );
};

export default QuestionnairePage;
