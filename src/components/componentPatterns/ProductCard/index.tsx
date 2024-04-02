import { ProductCardProps } from "@/interfaces";
import { ProductsProvider } from "@/context";

import styles from "../styles.module.css";

export const ProductCard = ({
  children,
  product,
  className,
  style
}: ProductCardProps) => {
  return (
    <ProductsProvider product={product}>
      <div style={style} className={`${styles.productCard} ${className}`}>
        {children}
      </div>
    </ProductsProvider>
  );
};
