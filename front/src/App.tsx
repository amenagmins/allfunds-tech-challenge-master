import React from "react";
import { Home } from "./pages/Home/Home";
import { NavBar } from "./pages/Home/components/NavBar/NavBar";
import "./App.css";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Home />
    </div>
  );
}

export default App;
