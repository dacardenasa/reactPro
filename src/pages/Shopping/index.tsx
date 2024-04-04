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
        className="bg-dark text-white"
        initialValues={{ count: 6, maxCount: 10 }}
      >
        {({ isMaxCountReached, handleIncreaseBy, reset }) => (
          <>
            <ProductImage className="custom-image" />
            <ProductTitle />
            <ProductButtons className="custom-buttons" />
            <div className="handlers-actions-box">
              <button title="reset" onClick={reset}>
                Reset
              </button>
              <button title="decreaseBy2" onClick={() => handleIncreaseBy(-2)}>
                {" "}
                -2{" "}
              </button>
              {!isMaxCountReached ? (
                <button
                  title="increaseBy2"
                  onClick={() => handleIncreaseBy(+2)}
                >
                  {" "}
                  +2{" "}
                </button>
              ) : null}
            </div>
          </>
        )}
      </ProductCard>
    </div>
  );
};

export default ShoppingPage;
