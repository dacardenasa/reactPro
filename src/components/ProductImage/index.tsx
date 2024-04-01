import noImage from "@assets/no-image.jpg";

import styles from "./productImage.module.css";
import { useContext } from "react";
import { ProductsContext } from "@/context";

export const ProductImage = ({ uriImage = "" }) => {
  const { product } = useContext(ProductsContext);
  let imageToShow: string;
  if (uriImage) {
    imageToShow = uriImage;
  } else if (product.uriImage) {
    imageToShow = product.uriImage;
  } else {
    imageToShow = noImage;
  }
  return (
    <img className={styles.productImg} src={imageToShow} alt="product-image" />
  );
};
