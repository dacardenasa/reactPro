import {
  ProductButtons,
  ProductCard,
  ProductImage,
  ProductTitle
} from "@/components";
import { Product } from "@/interfaces";

import "./shopping.styles.css";

const product: Product = {
  id: "shopping-123",
  title: "Cofee Mug - CardById",
  uriImage: "../../../public/coffee-mug.png"
};

const Shopping = () => {
  return (
    <div className="shopping-container">
      <h1 className="title">Shopping Page</h1>
      <hr />
      <div className="products-card-box">
        <ProductCard product={product} className="bg-dark text-white">
          <ProductImage className="custom-image" />
          <ProductTitle />
          <ProductButtons className="custom-buttons" />
        </ProductCard>
        <ProductCard product={product} className="bg-dark text-white">
          <ProductImage className="custom-image" />
          <ProductTitle />
          <ProductButtons className="custom-buttons" />
        </ProductCard>
        <ProductCard product={product} style={{ backgroundColor: "#70D1F8" }}>
          <ProductImage
            style={{
              padding: 16,
              borderRadius: 24,
            }}
          />
          <ProductTitle style={{ fontWeight: "bold" }} />
          <ProductButtons style={{ display: "flex", justifyContent: "end" }} />
        </ProductCard>
      </div>
    </div>
  );
};

export default Shopping;
