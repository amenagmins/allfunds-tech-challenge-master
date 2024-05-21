import React from "react";

import {
  fireEvent,
  render,
  screen,
  waitFor,
  within,
} from "@testing-library/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ProductType } from "../../types/commonTypes";
import { CartStateProvider } from "../../providers/cartProvider";
import { Home } from "./Home";

const productList: ProductType[] = [
  {
    id: "41fd4fd9-95c7-4809-96db-a147d352fdbb",
    image_url:
      "https://dummyimage.com/400x400/28200e/000&text=Unbranded Metal Chair",
    stock: 8,
    productName: "Unbranded Metal Chair",
    price: 43,
    productDescription:
      "Porro tempore autem. Sunt molestias qui quod recusandae nemo quia optio. Nostrum aperiam officiis aut reprehenderit illo.",
    favorite: false,
  },
  {
    id: "20cc33f1-223b-4cf0-878d-fdedb3f60b56",
    image_url:
      "https://dummyimage.com/400x400/2ee9f7/000&text=Handcrafted Metal Towels",
    stock: 41,
    productName: "Handcrafted Metal Towels",
    price: 98,
    productDescription:
      "Rerum minima laudantium blanditiis dolorem dolores ut sint ut quidem. Est doloremque repellat excepturi dolor consequatur rerum qui. Facere ut vel et enim accusamus ipsum dolores aut. Eaque quo ut omnis unde quam error voluptas non iure.",
    favorite: false,
  },
];

jest.mock("../../api", () => ({
  getProductsList: () => Promise.resolve(productList),
}));
describe("Home tests", () => {
  const queryClient = new QueryClient();
  test("should render a list with products", async () => {
    render(
      <QueryClientProvider client={queryClient}>
        <CartStateProvider>
          <Home />
        </CartStateProvider>
      </QueryClientProvider>
    );
    await waitFor(() => {
      expect(screen.getByText("Unbranded Metal Chair")).toBeInTheDocument();
    });
    await waitFor(() => {
      expect(screen.getByText("Handcrafted Metal Towels")).toBeInTheDocument();
    });
  });

  test("Adding to cart should work correctly", async () => {
    render(
      <QueryClientProvider client={queryClient}>
        <CartStateProvider>
          <Home />
        </CartStateProvider>
      </QueryClientProvider>
    );
    await waitFor(() => {
      const product = screen.getByText("Unbranded Metal Chair").closest("div");
      if (product) {
        const addToCartButton = within(product).getByRole("button", {
          name: /Añadir al carrito/i,
        });
        fireEvent.click(addToCartButton);
        fireEvent.click(addToCartButton);
      }
      expect(screen.getByText("86€")).toBeInTheDocument();
    });
  });
});
