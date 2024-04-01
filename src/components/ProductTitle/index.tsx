import { useContext } from "react";
import styles from "./productTitle.module.css";
import { ProductsContext } from "@/context";

export const ProductTitle = ({ title }: { title?: string }) => {
  const { product } = useContext(ProductsContext);
  return (
    <span className={styles.productDescription}>{title ?? product.title}</span>
  );
};
