import { ProductCardProps } from "@/interfaces";
import { ProductsProvider } from "@/context";

import styles from "../styles.module.css";
import { useCounter } from "@/hooks";

export const ProductCard = ({
  children,
  product,
  className,
  style,
  onChange,
  value
}: ProductCardProps) => {
  const { counter, handleIncreaseBy } = useCounter({ onChange, product, value });
  return (
    <ProductsProvider {...{ counter, product, handleIncreaseBy }}>
      <div style={style} className={`${styles.productCard} ${className}`}>
        {children}
      </div>
    </ProductsProvider>
  );
};
