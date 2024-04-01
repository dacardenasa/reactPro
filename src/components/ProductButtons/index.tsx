import { useContext } from "react";
import styles from "./productButtons.module.css";
import { ProductsContext } from "@/context";

export const ProductButtons = () => {
  const { counter, handleIncreaseBy } = useContext(ProductsContext);
  return (
    <div className={styles.buttonsContainer}>
      <button
        className={styles.buttonMinus}
        onClick={() => handleIncreaseBy(-1)}
      >
        -
      </button>
      <button className={styles.countLabel}>{counter}</button>
      <button className={styles.buttonAdd} onClick={() => handleIncreaseBy(1)}>
        +
      </button>
    </div>
  );
};
