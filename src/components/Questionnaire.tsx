"use client";

import React, { useRef, useEffect, useState } from "react";
import { useQuestionnaire } from "@/context/QuestionnaireContext";
import Link from "next/link";

const questionsList = [
  {
    id: "1",
    type: "system-a",
    question: "Rules must only prohibit action that violates someone's rights.",
    direction: "positive",
  },
  {
    id: "2",
    type: "system-a",
    question:
      "Students must respect the rights of other students to learn, by not disrupting the class.",
    direction: "positive",
  },
  {
    id: "3",
    type: "system-a",
    question: "Students are expected to act honestly in all academic matters.",
    direction: "positive",
  },
  {
    id: "4",
    type: "system-a",
    question:
      "Students who cheat must face immediate punishment no matter the severity in order to control the problem.",
    direction: "negative",
  },
  {
    id: "5",
    type: "system-a",
    question:
      "Technology should not be used to check for cheating because it can sometimes make mistakes and cause problems.",
    direction: "positive",
  },
  {
    id: "6",
    type: "system-b",
    question:
      "Rules should be written in a way where there cannot be room for misinterpretation.",
    direction: "positive",
  },
  {
    id: "7",
    type: "system-b",
    question: "Rules should adapt depending on the situation.",
    direction: "negative",
  },
  {
    id: "8",
    type: "system-b",
    question:
      "The same rules should be enforced the same ways no matter who is breaking them.",
    direction: "positive",
  },
  {
    id: "9",
    type: "system-b",
    question:
      "Enforcement of rule should be expected and leave no room for arbitrary judgement.",
    direction: "positive",
  },
  {
    id: "10",
    type: "system-b",
    question:
      "Students and teachers are expected to know the rules to have them enforced fairly.",
    direction: "positive",
  },
  {
    id: "11",
    type: "system-c",
    question:
      "Students should be punished consistently for breaking a rule, even if no one was hurt",
    direction: "negative",
  },
  {
    id: "12",
    type: "system-c",
    question:
      "Peer mediation should be a first option before administrators step in to punish a student.",
    direction: "positive",
  },
  {
    id: "13",
    type: "system-c",
    question:
      "Students should not be punished for minor infractions if they take responsibility and correct their actions.",
    direction: "positive",
  },
  {
    id: "14",
    type: "system-c",
    question:
      "The harmed party should have a say in how the issue is resolved.",
    direction: "positive",
  },
  {
    id: "15",
    type: "system-c",
    question:
      "Discipline should involve dialogue where students actively participate in finding a resolution.",
    direction: "positive",
  },
  {
    id: "16",
    type: "system-d",
    question:
      "Strict rules with firm punishments are necessary to maintain order in a schoolA student who repeatedly cheats should face escalating punishments, including expulsion.",
    direction: "positive",
  },
  {
    id: "17",
    type: "system-d",
    question:
      "A student who repeatedly cheats should face escalating punishments, including expulsion.",
    direction: "positive",
  },
  {
    id: "18",
    type: "system-d",
    question:
      "Rules should regulate student appearance and behavior to uphold the school’s standard.",
    direction: "positive",
  },
  {
    id: "19",
    type: "system-d",
    question:
      "A punishment system should focus on fairness and avoid overly harsh social penalties",
    direction: "negative",
  },
  {
    id: "20",
    type: "system-d",
    question:
      "Punishments should escalate with repeated offenses, eventually leading to expulsion if necessary",
    direction: "positive",
  },
];

interface QuestionnaireProps {
  currentQuestion: number;
  questionType: string;
  nextUp: () => void;
  nextPage: string;
}

const Questionnaire: React.FC<QuestionnaireProps> = ({
  currentQuestion,
  questionType,
  nextUp,
  nextPage,
}) => {
  const questionRefs = useRef<(HTMLDivElement | null)[]>([]);
  const { responses, setResponse } = useQuestionnaire(); // Use context to manage responses
  const [currentSet, setCurrentSet] = useState("system-a");

  useEffect(() => {
    if (questionRefs.current[currentQuestion]) {
      questionRefs.current[currentQuestion].scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }
  }, [currentQuestion]);

  const likertClick = (buttonIndex: number) => {
    setResponse(currentQuestion, buttonIndex); // Update response in context
    nextUp();
  };

  const handleScroll = (index: number) => {
    if (index + 1 === 5) {
      setCurrentSet("system-b");
    } else if (index + 1 === 10) {
      setCurrentSet("system-c");
    } else if (index + 1 === 15) {
      setCurrentSet("system-d");
    } else if (questionRefs.current[index + 1]) {
      questionRefs.current[index + 1]!.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    if (
      currentQuestion % 5 === 4 &&
      currentQuestion < questionsList.length - 1
    ) {
      handleScroll(currentQuestion);
    }
  }, [currentQuestion]);

  return (
    <div
      className="flex flex-col items-center justify-center gap-42 z-1 relative transition-all duration-500"
      id="questions-container"
      style={{ overflow: "hidden", height: "100vh" }}
    >
      <div
        className="overflow-auto w-full h-full"
        id="questions"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {questionsList
          .filter((q) => q.type === currentSet)
          .map((q, index) => (
            <div
              key={q.id}
              ref={(el) => {
                questionRefs.current[index] = el;
              }}
              className="flex flex-col gap-12 items-center justify-center h-screen"
            >
              <p className="text-4xl w-2/3 text-center">{q.question}</p>
              <div className="flex items-center justify-center gap-12">
                <button
                  className={`w-35 h-35 border-text-50 border-2 hover:border-none hover:bg-primary rounded-full ${
                    responses[index] === 1 ? "bg-primary" : ""
                  }`}
                  onClick={() => {
                    likertClick(1);
                  }}
                ></button>
                <button
                  className={`w-25 h-25 border-text-50 border-2 hover:border-none hover:bg-primary rounded-full ${
                    responses[index] === 2 ? "bg-primary" : ""
                  }`}
                  onClick={() => {
                    likertClick(2);
                  }}
                ></button>
                <button
                  className={`w-20 h-20 border-text-50 border-2 hover:border-none hover:bg-text-50 rounded-full ${
                    responses[index] === 3 ? "bg-text-50" : ""
                  }`}
                  onClick={() => {
                    likertClick(3);
                  }}
                ></button>
                <button
                  className={`w-25 h-25 border-text-50 border-2 hover:border-none hover:bg-accent rounded-full ${
                    responses[index] === 4 ? "bg-accent" : ""
                  }`}
                  onClick={() => {
                    likertClick(4);
                  }}
                ></button>
                <button
                  className={`w-35 h-35 border-text-50 border-2 hover:border-none hover:bg-accent rounded-full ${
                    responses[index] === 5 ? "bg-accent" : ""
                  }`}
                  onClick={() => {
                    likertClick(5);
                  }}
                ></button>
              </div>
              {index % 5 === 4 && index < questionsList.length - 1 && (
                <div className="flex justify-center mt-4">
                  <Link href={nextPage}>
                    <button className="px-6 py-2 bg-primary text-text text-2xl font-medium rounded-md hover:bg-primary/50 transition-all duration-300 cursor-pointer">
                      Next
                    </button>
                  </Link>
                </div>
              )}
            </div>
          ))}
      </div>
    </div>
  );
};

export default Questionnaire;
