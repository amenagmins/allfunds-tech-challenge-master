import React from "react";
import "./cartItem.css";
import minusIcon from "../../../../icons/minus-solid.svg";
import plusIcon from "../../../../icons/plus-solid.svg";
import { ProductTypeWithQuant } from "../../../../types/commonTypes";
import { useCartState } from "../../../../providers/cartProvider";

export const CartItem = ({ product }: { product: ProductTypeWithQuant }) => {
  const { removeProductFromCart, increaseProductQuantity } = useCartState();
  return (
    <section className="cart-item">
      <header>
        <section>
          <img alt={product.productName} src={product.image_url} />
          <div>
            <span>
              <b>{product.productName}</b>
            </span>
            <span>{product.price}€</span>
          </div>
        </section>
      </header>
      <footer>
        <button
          className="cart-item__button cart-item__minus"
          style={{
            background: `url(${minusIcon}) no-repeat center center`,
          }}
          onClick={() => removeProductFromCart(product.id)}
        />
        <span>{product.quantity}</span>
        <button
          className="cart-item__button cart-item__plus"
          style={{
            background: `url(${plusIcon}) no-repeat center center`,
          }}
          onClick={() => increaseProductQuantity(product.id)}
        />
      </footer>
    </section>
  );
};
