import {
  ProductButtons,
  ProductCard,
  ProductImage,
  ProductTitle
} from "@/components";
import { Product } from "@/interfaces";

const product: Product = {
  id: "shopping-123",
  title: "Cofee Mug - CardById",
  uriImage: "../../../public/coffee-mug.png"
};

const Shopping = () => {
  return (
    <div>
      <h1 style={{ marginBottom: 16 }}>Shopping Page</h1>
      <hr />
      <div style={{ display: "flex", flexWrap: "wrap", marginTop: 16 }}>
        <ProductCard product={product}>
          <ProductImage />
          <ProductTitle />
          <ProductButtons />
        </ProductCard>
        <ProductCard product={product}>
          <ProductImage />
          <ProductTitle title={"Package Sum"} />
          <ProductButtons />
        </ProductCard>
      </div>
    </div>
  );
};

export default Shopping;
