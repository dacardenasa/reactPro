import { Product, onChangeProductCountArgs } from "@/interfaces";
import { useCallback, useState } from "react";

type ProductInCart = Product & { count: number };

export const useShopping = () => {
  const [shoppingCart, setShoppingCart] = useState<{
    [key: string]: ProductInCart;
  }>({});

  const handleChangeCountProduct = useCallback(
    ({ count, product }: onChangeProductCountArgs) => {
      setShoppingCart((prev) => {
        const productInCart = prev[product.id] ?? { ...product, count: 0 };
        if (Math.max(productInCart.count + count, 0) > 0) {
          productInCart.count += count;
          return {
            ...prev,
            [product.id]: productInCart
          };
        }
        const shoppingCartBakup = { ...prev };
        delete shoppingCartBakup[product.id];
        return shoppingCartBakup;
      });
    },
    []
  );
  return {
    shoppingCart,
    handleChangeCountProduct
  };
};
