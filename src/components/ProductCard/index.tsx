import { ProductCardProps } from "@/interfaces";
import { ProductsProvider } from "@/context";
import { useProduct } from "@/hooks";

import styles from "./productCard.module.css";

export const ProductCard = ({
  children,
  product,
  className,
  style,
  onChange,
  value,
  initialValues
}: ProductCardProps) => {
  const { counter, maxCount, isMaxCountReached, handleIncreaseBy, reset } =
    useProduct({
      onChange,
      product,
      value,
      initialValues
    });
  return (
    <ProductsProvider
      {...{
        counter,
        product,
        handleIncreaseBy,
        maxCount: initialValues?.maxCount
      }}
    >
      <div style={style} className={`${styles.productCard} ${className}`}>
        {children({
          count: counter,
          isMaxCountReached,
          maxCount,
          product,
          handleIncreaseBy,
          reset
        })}
      </div>
    </ProductsProvider>
  );
};
