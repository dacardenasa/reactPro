import { ReactElement, createContext } from "react";

import { useCounter } from "@/hooks";
import { Product } from "@/interfaces";

export type ProductsContextProps = {
  counter: number;
  handleIncreaseBy: (value: number) => void;
  product: Product;
};

export const ProductsContext = createContext({} as ProductsContextProps);

export const ProductsProvider = ({
  children,
  product
}: {
  children: ReactElement | ReactElement[];
  product: Product;
}) => {
  const { counter, handleIncreaseBy } = useCounter(0);
  return (
    <ProductsContext.Provider value={{ counter, handleIncreaseBy, product }}>
      {children}
    </ProductsContext.Provider>
  );
};
