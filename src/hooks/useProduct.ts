import { useEffect, useRef, useState } from "react";
import {
  Product,
  ProductCardInitialValues,
  onChangeProductCountArgs
} from "@/interfaces";

type useCounterArgs = {
  product: Product;
  onChange?: (args: onChangeProductCountArgs) => void;
  value?: number;
  initialValues?: ProductCardInitialValues;
};

export const useProduct = ({
  onChange,
  product,
  value = 0,
  initialValues
}: useCounterArgs) => {
  const [counter, setCounter] = useState(0);
  const isControlled = useRef(!!onChange);

  const handleIncreaseBy = (value: number) => {
    const newCountValue = Math.max(counter + value, 0);
    if (initialValues?.maxCount && newCountValue > initialValues.maxCount)
      return;
    if (isControlled.current) {
      return onChange!({ count: value, product });
    }
    setCounter(newCountValue);
  };

  const reset = () => setCounter(initialValues?.count ?? value)

  useEffect(() => {
    setCounter(initialValues?.count ?? value);
  }, [initialValues?.count, value]);

  return {
    counter,
    isMaxCountReached: initialValues?.maxCount === counter,
    maxCount: initialValues?.maxCount,
    handleIncreaseBy,
    reset
  };
};
