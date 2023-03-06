import "./App.css";
import { useState } from "react";
import ButtonJSX from "./components/ButtonJSX";
import RecipeReviewCard from "./components/RecipeReviewCard";
import productos from "../productos";
import Navbar from "./components/Navbar";

function App() {
  console.log(productos);
  return (
    <div>
      <Navbar />
      <p></p>
      {productos.map((producto) => (
        <RecipeReviewCard producto={producto} />
      ))}
    </div>
  );
}

export default App;
