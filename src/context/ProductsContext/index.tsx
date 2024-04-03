import { ReactElement, createContext } from "react";

import { Product } from "@/interfaces";

export type ProductsContextProps = {
  counter: number;
  handleIncreaseBy: (value: number) => void;
  product: Product;
};

export const ProductsContext = createContext({} as ProductsContextProps);

export const ProductsProvider = ({
  children,
  product,
  counter,
  handleIncreaseBy
}: {
  children: ReactElement | ReactElement[];
  product: Product;
  counter: number;
  handleIncreaseBy: (fvalue: number) => void;
}) => {
  return (
    <ProductsContext.Provider value={{ counter, handleIncreaseBy, product }}>
      {children}
    </ProductsContext.Provider>
  );
};
