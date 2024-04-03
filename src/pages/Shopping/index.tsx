import {
  ProductButtons,
  ProductCard,
  ProductImage,
  ProductTitle
} from "@/components";

import { products } from "./mockData";
import { useShopping } from "./useShopping";

import "./shopping.styles.css";


const ShoppingPage = () => {
  const { shoppingCart, handleChangeCountProduct } = useShopping();
  return (
    <div className="shopping-container">
      <h1 className="title">Shopping Page</h1>
      <hr />
      <div className="products-card-box">
        {products.map((product) => (
          <ProductCard
            product={product}
            className="bg-dark text-white"
            key={product.id}
            onChange={handleChangeCountProduct}
            value={shoppingCart[product.id]?.count ?? 0}
          >
            <ProductImage className="custom-image" />
            <ProductTitle />
            <ProductButtons className="custom-buttons" />
          </ProductCard>
        ))}
      </div>
      <div className="shopping-cart">
        {Object.entries(shoppingCart).map(([key, product]) => (
          <ProductCard
            product={product}
            className="bg-dark text-white"
            style={{ width: 100 }}
            onChange={handleChangeCountProduct}
            value={product.count}
            key={key}
          >
            <ProductImage className="custom-image" />
            <ProductButtons
              className="custom-buttons"
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center"
              }}
            />
          </ProductCard>
        ))}
      </div>
    </div>
  );
};

export default ShoppingPage;
