import { useContext } from "react";

import { ProductsContext } from "@/context";

import styles from "./productImage.module.css";

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
    imageToShow = "https://image-test-aws.s3.us-west-1.amazonaws.com/no-image.jpg";
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
