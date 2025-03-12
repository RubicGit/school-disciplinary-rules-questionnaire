"use client";

import React, { useState } from "react";
import { useTeacherStudent } from "@/context/EntryContext";

const Age = () => {
  const { age, setAge } = useTeacherStudent(); // Use context to manage age
  const [error, setError] = useState<string | null>(null);

  const handleAgeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    const numericValue = parseInt(value, 10);

    if (!isNaN(numericValue)) {
      if (numericValue < 13 || numericValue > 20) {
        setError("Please enter a valid age between 13 and 20.");
      } else {
        setError(null);
        setAge(numericValue);
      }
    } else {
      setError("Please enter a valid number.");
    }
  };

  return (
    <div className="flex flex-col gap-12 justify-center z-1">
      <h1 className="text-6xl font-bold text-center max-w-1xl">
        What is your age?
      </h1>
      <div className="flex justify-center items-center">
        <input
          type="number"
          className="px-3 py-2 border-2 text-text transition-all duration-300 border-text-50 file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground flex rounded-md bg-transparent text-base shadow-xs outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-xl w-full"
          placeholder="Enter your age"
          value={age != 0 ? "" : age} // Initialize with empty string if age is 0
          onChange={handleAgeChange}
        />
      </div>
      {error && (
        <p className="text-red-500 text-center absolute bottom-48 left-[50%] -translate-x-1/2">
          {error}
        </p>
      )}
    </div>
  );
};

export default Age;
