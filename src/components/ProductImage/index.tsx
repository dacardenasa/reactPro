import noImage from "@assets/no-image.jpg";

import styles from "./productImage.module.css";
import { useContext } from "react";
import { ProductsContext } from "@/context";

type ProductImageProps = {
  uriImage?: string;
  className?: string;
  style?: React.CSSProperties;
};

export const ProductImage = ({
  uriImage = "",
  className,
  style
}: ProductImageProps) => {
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
    <img
      className={`${styles.productImg} ${className}`}
      src={imageToShow}
      style={style}
      alt="product-image"
    />
  );
};
