import { useContext, useMemo } from "react";
import styles from "./productButtons.module.css";
import { ProductsContext } from "@/context";

type ProductButtonsProps = {
  className?: string;
  style?: React.CSSProperties;
};

export const ProductButtons = ({ className, style }: ProductButtonsProps) => {
  const { counter, handleIncreaseBy, maxCount } = useContext(ProductsContext);
  const isMaxCountReached = useMemo(
    () => maxCount === counter,
    [counter, maxCount]
  );
  return (
    <div className={`${styles.buttonsContainer} ${className}`} style={style}>
      <button
        className={styles.buttonMinus}
        onClick={() => handleIncreaseBy(-1)}
      >
        -
      </button>
      <div className={styles.countLabel}>{counter}</div>
      <button
        className={`${styles.buttonAdd} ${
          isMaxCountReached ? styles.disabled : ""
        }`}
        onClick={() => handleIncreaseBy(1)}
      >
        +
      </button>
    </div>
  );
};
