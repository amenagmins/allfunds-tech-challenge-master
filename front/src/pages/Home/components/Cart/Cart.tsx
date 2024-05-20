import React from "react";
import "./cart.css";
import { CartItem } from "./components/CartIem/CartItem";
import closeButton from "../../../../icons/x-solid.svg";
import { useCartState } from "../../../../providers/cartProvider";
import { ProductTypeWithQuant } from "../../../../types/commonTypes";

export const Cart = () => {
  const { isShowingCart, setIsShowingCart, cartProducts, totalPrice } =
    useCartState();
  return (
    <article
      style={{ display: isShowingCart ? "flex" : "none" }}
      className="cart"
    >
      <header>
        <button
          onClick={() => setIsShowingCart(false)}
          style={{
            background: `url(${closeButton}) no-repeat center center`,
          }}
        />
        <p>
          TOTAL <b>{totalPrice}€</b>
        </p>
      </header>
      <section>
        {cartProducts.map((product: ProductTypeWithQuant) => (
          <CartItem key={product.id} product={product} />
        ))}
      </section>
    </article>
  );
};
