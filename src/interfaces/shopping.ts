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

export type ProductCardProps = {
  children?: ReactElement | ReactElement[];
  product: Product;
  className?: string;
  style?: React.CSSProperties;
  onChange?: (args: onChangeProductCountArgs) => void;
  value?: number;
};
