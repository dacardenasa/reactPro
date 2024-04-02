import { useContext } from "react";
import styles from "./productTitle.module.css";
import { ProductsContext } from "@/context";

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
