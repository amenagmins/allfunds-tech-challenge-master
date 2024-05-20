import React from "react";
import "./cart.css";
// import { CartItem } from "./components/CartIem/CartItem";
import closeButton from "../../../../icons/x-solid.svg";

export const Cart = () => {
  return (
    <article className="cart">
      <header>
        <button
          style={{
            background: `url(${closeButton}) no-repeat center center`,
          }}
        />
        <p>
          TOTAL <b>30€</b>
        </p>
      </header>
      <section>
        {/* <CartItem />
        <CartItem />
        <CartItem /> */}
      </section>
    </article>
  );
};
