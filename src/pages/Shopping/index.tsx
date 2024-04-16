import {
  ProductButtons,
  ProductCard,
  ProductImage,
  ProductTitle
} from "@/components";

import { products } from "./mockData";

import "./shopping.styles.css";

const ShoppingPage = () => {
  return (
    <div className="shopping-container">
      <h1 className="title">Shopping Page</h1>
      <hr />
      <ProductCard
        product={products[0]}
        initialValues={{ count: 6, maxCount: 10 }}
      >
        {() => (
          <>
            <ProductImage />
            <ProductTitle />
            <ProductButtons />
          </>
        )}
      </ProductCard>
    </div>
  );
};

export default ShoppingPage;
