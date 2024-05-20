import React from "react";
import { ProductsList } from "./components/ProductsList/ProductsList";
import { Cart } from "./components/Cart/Cart";

export const Home = () => {
  return (
    <>
      <Cart />
      <ProductsList />
    </>
  );
};
