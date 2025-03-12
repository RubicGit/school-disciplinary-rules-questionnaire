"use client";

import { createContext, useContext, useState, ReactNode } from "react";

interface QuestionnaireContextProps {
  responses: number[];
  setResponse: (questionIndex: number, response: number) => void;
}

const QuestionnaireContext = createContext<
  QuestionnaireContextProps | undefined
>(undefined);

export const QuestionnaireProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [responses, setResponses] = useState<number[]>(Array(20).fill(-1));

  const setResponse = (questionIndex: number, response: number) => {
    setResponses((prevResponses) => {
      const newResponses = [...prevResponses];
      newResponses[questionIndex] = response;
      return newResponses;
    });
  };

  return (
    <QuestionnaireContext.Provider value={{ responses, setResponse }}>
      {children}
    </QuestionnaireContext.Provider>
  );
};

export const useQuestionnaire = (): QuestionnaireContextProps => {
  const context = useContext(QuestionnaireContext);
  if (context === undefined) {
    throw new Error(
      "useQuestionnaire must be used within a QuestionnaireProvider"
    );
  }
  return context;
};
