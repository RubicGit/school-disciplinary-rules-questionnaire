import React from "react";
import { ChartLine } from "lucide-react";

const CongratsPage: React.FC = () => {
  return (
    <div className="w-screen h-screen flex gap-9">
      <div className="flex h-[100vh-12px] w-96 border-1 border-text/20 p-2 rounded-2xl m-6 mr-0 flex-col gap-1 items-center">
        <div className="p-2 w-full h-fit rounded-sm hover:bg-text/5 flex items-center gap-2">
          <ChartLine
            className="bg-accent rounded-md p-2"
            size={32}
            color="#f4fbfa"
          />
          <h1 className="text-lg font-bold text-left">Questionnaire</h1>
        </div>
        <h1 className="text-md w-full h-fit font-bold p-1 4 rounded-sm text-left hover:bg-text/5">
          Graphs
        </h1>
        <button className="text-sm w-4/5 h-fit font-semibold p-1.5 shadow-xs bg-text/5 rounded-sm text-left">
          Graph 1
        </button>
        <button className="text-sm w-4/5 h-fit font-semibold p-1.5 rounded-sm text-left hover:bg-text/5">
          Graph 2
        </button>
        <button className="text-sm w-4/5 h-fit font-semibold p-1.5 rounded-sm text-left hover:bg-text/5">
          Graph 3
        </button>
      </div>
      <div className="flex h-[100vh-12px] w-full rounded-2xl m-6 ml-0 flex-col gap-9">
        <div className="flex h-1/3 w-full justify-between gap-9">
          <div className="flex w-1/3 border-1 border-text/20 p-6 rounded-2xl"></div>
          <div className="flex w-1/3 border-1 border-text/20 p-6 rounded-2xl"></div>
          <div className="flex w-1/3 border-1 border-text/20 p-6 rounded-2xl"></div>
        </div>
        <div className="flex h-2/3 border-1 border-text/20 p-6 rounded-2xl"></div>
      </div>
    </div>
  );
};

export default CongratsPage;
