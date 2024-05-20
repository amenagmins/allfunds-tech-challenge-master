import React from "react";
import { Home } from "./pages/Home/Home";
import { NavBar } from "./pages/Home/components/NavBar/NavBar";
import "./App.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { CartStateProvider } from "./providers/cartProvider";

const queryClient = new QueryClient();
function App() {
  return (
    <div className="App">
      <QueryClientProvider client={queryClient}>
        <CartStateProvider>
          <NavBar />
          <Home />
        </CartStateProvider>
        <ReactQueryDevtools />
      </QueryClientProvider>
    </div>
  );
}

export default App;
