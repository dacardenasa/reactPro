import { ReactElement } from "react";

export type Product = {
  id: string;
  title: string;
  uriImage?: string;
};

export type ProductCardProps = {
  children?: ReactElement | ReactElement[];
  product: Product;
};
