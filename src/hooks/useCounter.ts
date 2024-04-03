import { useEffect, useRef, useState } from "react";
import { Product, onChangeProductCountArgs } from "@/interfaces";

type useCounterArgs = {
  product: Product;
  onChange?: (args: onChangeProductCountArgs) => void;
  value?: number
};

export const useCounter = ({ onChange, product, value = 0 }: useCounterArgs) => {
  const [counter, setCounter] = useState(value);
  const isControlled = useRef(!!onChange)
  const handleIncreaseBy = (value: number) => {
    if (isControlled.current) {
      return onChange!({ count: value, product })
    }
    const newCounterValue = Math.max(counter + value, 0);
    setCounter(newCounterValue);
  };

  useEffect(() => {
    setCounter(value);
  }, [value])

  return { counter, handleIncreaseBy };
};
