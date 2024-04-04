import { ReactElement } from "react";

export type Product = {
  id: string;
  title: string;
  uriImage?: string;
};

export type onChangeProductCountArgs = {
  product: Product;
  count: number;
};

export type ProductCardInitialValues = {
  count?: number;
  maxCount?: number;
};

export type ProductCardHandlers = {
  count: number;
  isMaxCountReached: boolean;
  maxCount?: number;
  product: Product;
  handleIncreaseBy: (value: number) => void;
  reset: () => void;
};

export type ProductCardProps = {
  // children?: ReactElement | ReactElement[];
  children: (props: ProductCardHandlers) => ReactElement;
  product: Product;
  className?: string;
  style?: React.CSSProperties;
  onChange?: (args: onChangeProductCountArgs) => void;
  value?: number;
  initialValues?: ProductCardInitialValues;
};
