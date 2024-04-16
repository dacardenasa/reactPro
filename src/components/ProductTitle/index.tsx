import { useContext } from "react";
import { ProductsContext } from "@/context";

import styles from "./productTitle.module.css";

type ProductTitleProps = {
  title?: string;
  className?: string;
  style?: React.CSSProperties;
};

export const ProductTitle = ({
  title,
  className,
  style
}: ProductTitleProps) => {
  const { product } = useContext(ProductsContext);
  return (
    <span className={`${styles.productDescription} ${className}`} style={style}>
      {title ?? product.title}
    </span>
  );
};
