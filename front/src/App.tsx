import React from "react";
import { Home } from "./pages/Home/Home";
import { NavBar } from "./pages/Home/components/NavBar/NavBar";
import "./App.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { CartStateProvider } from "./providers/cartProvider";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Favs } from "./pages/Favs/Favs";

const queryClient = new QueryClient();
function App() {
  return (
    <div className="App">
      <QueryClientProvider client={queryClient}>
        <CartStateProvider>
          <Router>
            <NavBar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/favs" element={<Favs />} />
            </Routes>
          </Router>
        </CartStateProvider>
        <ReactQueryDevtools />
      </QueryClientProvider>
    </div>
  );
}

export default App;
