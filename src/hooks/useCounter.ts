import { useState } from "react";

export const useCounter = (initialValue: number = 0) => {
  const [counter, setCounter] = useState(initialValue);
  const handleIncreaseBy = (value: number) =>
    setCounter((c) => Math.max(c + value, 0));
  return { counter, handleIncreaseBy };
};
