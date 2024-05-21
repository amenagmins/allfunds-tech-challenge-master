import React from "react";
import { Product } from "./components/Product/Product";
import "./productsList.css";
import { ProductType } from "../../types/commonTypes";

type ProductsListProps = { isLoading: boolean; data: ProductType[] };

export const ProductsList = ({ isLoading, data }: ProductsListProps) => {
  return (
    <article className="products-list">
      {isLoading ? (
        <p className="products-list__message">Cargando productos...</p>
      ) : data.length > 0 ? (
        data.map((product: ProductType) => (
          <div key={product.id} className="product-container">
            <Product product={product} />
          </div>
        ))
      ) : (
        <p className="products-list__message">No hay productos</p>
      )}
    </article>
  );
};
