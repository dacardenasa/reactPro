import { ReactElement, createContext } from "react";

import { Product } from "@/interfaces";

export type ProductsContextProps = {
  counter: number;
  handleIncreaseBy: (value: number) => void;
  maxCount?: number;
  product: Product;
};

export type ProductProviderProps = ProductsContextProps & {
  children: ReactElement | ReactElement[];
};

export const ProductsContext = createContext({} as ProductsContextProps);

export const ProductsProvider = ({
  children,
  counter,
  handleIncreaseBy,
  maxCount,
  product
}: ProductProviderProps) => {
  return (
    <ProductsContext.Provider
      value={{ counter, handleIncreaseBy, product, maxCount }}
    >
      {children}
    </ProductsContext.Provider>
  );
};
