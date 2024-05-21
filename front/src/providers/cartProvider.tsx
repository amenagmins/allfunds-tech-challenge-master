import React, { ReactNode, useContext, useState } from "react";
import { ProductType, ProductTypeWithQuant } from "../types/commonTypes";

type CartStateType = {
  totalPrice: number;
  productsNumber: number;
  cartProducts: ProductTypeWithQuant[];
  addProductToCart: (newProduct: ProductType) => void;
  removeProductFromCart: (id: string) => void;
  increaseProductQuantity: (id: string) => void;
  setIsShowingCart: (isShowingCart: boolean) => void;
  isShowingCart: boolean;
};

const defaultCartState: CartStateType = {
  totalPrice: 0,
  productsNumber: 0,
  cartProducts: [],
  addProductToCart: () => {},
  removeProductFromCart: () => {},
  setIsShowingCart: () => {},
  increaseProductQuantity: () => {},
  isShowingCart: false,
};

const CartStateContext = React.createContext(defaultCartState);

export const CartStateProvider = ({ children }: { children: ReactNode }) => {
  const [totalPrice, setTotalPrice] = useState(0);
  const [productsNumber, setProductsNumber] = useState(0);
  const [cartProducts, setCartProducts] = useState<ProductTypeWithQuant[]>([]);
  const [isShowingCart, setIsShowingCart] = useState(false);

  const increaseProductQuantity = (id: string) => {
    const newCart: ProductTypeWithQuant[] = [...cartProducts];
    const index = newCart.findIndex(
      (product: ProductTypeWithQuant) => product.id === id
    );
    newCart[index].quantity = newCart[index].quantity + 1;
    setTotalPrice(totalPrice + newCart[index].price);
    setProductsNumber(productsNumber + 1);
    setCartProducts(newCart);
  };

  const addProductToCart = (newProduct: ProductType) => {
    const newCart: ProductTypeWithQuant[] = [...cartProducts];
    const index = newCart.findIndex(
      (product: ProductTypeWithQuant) => product.id === newProduct.id
    );
    if (index !== -1) {
      increaseProductQuantity(newProduct.id);
    } else {
      newCart.push({
        ...newProduct,
        quantity: 1,
      });
      setTotalPrice(totalPrice + newProduct.price);
      setProductsNumber(productsNumber + 1);
      setCartProducts(newCart);
    }
  };

  const removeProductFromCart = (id: string) => {
    const newCart: ProductTypeWithQuant[] = [...cartProducts];
    const index = newCart.findIndex(
      (product: ProductTypeWithQuant) => product.id === id
    );
    setTotalPrice(totalPrice - newCart[index].price);
    if (newCart[index].quantity > 1) {
      newCart[index].quantity = newCart[index].quantity - 1;
    } else {
      newCart.splice(index, 1);
    }
    setCartProducts(newCart);
    setProductsNumber(productsNumber - 1);
  };

  return (
    <CartStateContext.Provider
      value={{
        totalPrice,
        productsNumber,
        cartProducts,
        addProductToCart,
        removeProductFromCart,
        increaseProductQuantity,
        setIsShowingCart,
        isShowingCart,
      }}
    >
      {children}
    </CartStateContext.Provider>
  );
};

export const useCartState = () => {
  const cartStateContext = useContext(CartStateContext);
  if (cartStateContext) {
    return cartStateContext;
  } else {
    throw new Error("useCartState must be used within a CartStateProvider");
  }
};
