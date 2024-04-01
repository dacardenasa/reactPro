import { ProductCardProps } from "@/interfaces";
import { ProductsProvider } from "@/context";

import styles from "../styles.module.css";

export const ProductCard = ({ children, product }: ProductCardProps) => {
  return (
    <ProductsProvider product={product}>
      <div className={styles.productCard}>{children}</div>
    </ProductsProvider>
  );
};
