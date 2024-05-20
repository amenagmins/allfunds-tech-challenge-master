import React from "react";
import "./cartItem.css";
import minusIcon from "../../../../../../icons/minus-solid.svg";
import plusIcon from "../../../../../../icons/plus-solid.svg";

type CartItemProps = {
  name: string;
  price: number;
  quantity: number;
};

export const CartItem = ({ name, price, quantity }: CartItemProps) => {
  return (
    <section className="cart-item">
      <header>
        <section>
          <img
            alt="Unbranded Metal Chair"
            src="https://dummyimage.com/400x400/28200e/000&text=Unbranded Metal Chair"
          />
          <div>
            <span>
              <b>{name}</b>
            </span>
            <span>{price}€</span>
          </div>
        </section>
      </header>
      <footer>
        <button
          className="cart-item__button cart-item__minus"
          style={{
            background: `url(${minusIcon}) no-repeat center center`,
          }}
        />
        <span>{quantity}</span>
        <button
          className="cart-item__button cart-item__plus"
          style={{
            background: `url(${plusIcon}) no-repeat center center`,
          }}
        />
      </footer>
    </section>
  );
};
