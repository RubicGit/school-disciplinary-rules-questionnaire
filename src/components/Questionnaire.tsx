"use client";

import React, { useRef, useEffect, useState } from "react";

interface QuestionnaireProps {
  currentQuestion: number;
  questionType: string;
  nextUp: () => void;
}

interface Question {
  id: string;
  type: string;
  question: string;
}

interface QuestionsList {
  id: string;
  type: string;
  question: string;
}

const questionsList: QuestionsList[] = [
  {
    id: "1",
    type: "system-a",
    question: "What is your favorite subject in school?",
  },
  { id: "2", type: "system-a", question: "How do you feel about homework?" },
  {
    id: "3",
    type: "system-a",
    question: "What is the most important rule in school?",
  },
  {
    id: "4",
    type: "system-a",
    question: "How should students be rewarded for good behavior?",
  },
  {
    id: "5",
    type: "system-a",
    question: "What is the best way to handle bullying?",
  },
  {
    id: "6",
    type: "system-b",
    question: "What extracurricular activities do you participate in?",
  },
  {
    id: "7",
    type: "system-b",
    question:
      "How do you manage your time between school and other activities?",
  },
  {
    id: "8",
    type: "system-b",
    question: "What do you think about the school’s dress code?",
  },
  {
    id: "9",
    type: "system-b",
    question: "How can the school improve its facilities?",
  },
  {
    id: "10",
    type: "system-b",
    question: "What changes would you like to see in the school curriculum?",
  },
  { id: "11", type: "system-c", question: "How do you prepare for exams?" },
  {
    id: "12",
    type: "system-c",
    question: "What is your opinion on group projects?",
  },
  {
    id: "13",
    type: "system-c",
    question: "How do you handle stress during the school year?",
  },
  {
    id: "14",
    type: "system-c",
    question: "What role do teachers play in your education?",
  },
  {
    id: "15",
    type: "system-c",
    question: "How can the school support students’ mental health?",
  },
  {
    id: "16",
    type: "system-d",
    question: "What do you think about the school’s lunch program?",
  },
  {
    id: "17",
    type: "system-d",
    question: "How do you stay motivated throughout the school year?",
  },
  {
    id: "18",
    type: "system-d",
    question: "What is your favorite school event or tradition?",
  },
  {
    id: "19",
    type: "system-d",
    question: "How can the school foster a sense of community?",
  },
  {
    id: "20",
    type: "system-d",
    question: "What advice would you give to new students?",
  },
];

const Questionnaire: React.FC<QuestionnaireProps> = ({
  currentQuestion,
  questionType,
  nextUp,
}) => {
  const questionRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [questions, setQuestions] = useState<Question[]>([]);
  const [selectedButton, setSelectedButton] = useState<number[]>(
    Array(questionsList.length).fill(-1),
  );

  useEffect(() => {
    const filteredQuestions = questionsList.filter(
      (q) => q.type === questionType,
    );
    setQuestions(filteredQuestions);
  }, [questionType]);

  useEffect(() => {
    if (questionRefs.current[currentQuestion]) {
      questionRefs.current[currentQuestion].scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }
  }, [currentQuestion]);

  const likertClick = (buttonIndex: number) => {
    const newSelectedButton = [...selectedButton];
    newSelectedButton[currentQuestion] = buttonIndex;
    setSelectedButton(newSelectedButton);
    nextUp();
  };

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
        {questions.map((q, index) => (
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
                className={`w-35 h-35 border-text-50 border-2 hover:border-none hover:bg-primary rounded-full ${selectedButton[index] === 1 ? "bg-primary" : ""}`}
                onClick={() => {
                  likertClick(1);
                }}
              ></button>
              <button
                className={`w-25 h-25 border-text-50 border-2 hover:border-none hover:bg-primary rounded-full ${selectedButton[index] === 2 ? "bg-primary" : ""}`}
                onClick={() => {
                  likertClick(2);
                }}
              ></button>
              <button
                className={`w-20 h-20 border-text-50 border-2 hover:border-none hover:bg-text-50 rounded-full ${selectedButton[index] === 3 ? "bg-text-50" : ""}`}
                onClick={() => {
                  likertClick(3);
                }}
              ></button>
              <button
                className={`w-25 h-25 border-text-50 border-2 hover:border-none hover:bg-accent rounded-full ${selectedButton[index] === 4 ? "bg-accent" : ""}`}
                onClick={() => {
                  likertClick(4);
                }}
              ></button>
              <button
                className={`w-35 h-35 border-text-50 border-2 hover:border-none hover:bg-accent rounded-full ${selectedButton[index] === 5 ? "bg-accent" : ""}`}
                onClick={() => {
                  likertClick(5);
                }}
              ></button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Questionnaire;
