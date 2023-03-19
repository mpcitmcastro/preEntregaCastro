import "./App.css";
import { useState } from "react";
<<<<<<< HEAD
import productos from "../productos";
import Navbar from "./components/Navbar";
import ProductList from "./components/ProductList";
import { Route, Routes } from "react-router-dom";
=======
import ButtonJSX from "./components/ButtonJSX";
import RecipeReviewCard from "./components/RecipeReviewCard";
import productos from "../productos";
import Navbar from "./components/Navbar";
>>>>>>> 0b01d383f40ab6f20d7ff15d348f84b4eeabc6e4

function App() {
  console.log(productos);
  return (
    <div>
      <Navbar />
<<<<<<< HEAD
      <Routes>
        <Route path="/" element={<h1>ARTICULOS DE ILUMINACION PRINCIPAL</h1>} />
        <Route path="/Lista" element={<ProductList productos={productos} />} />
        <Route path="/Grupos" element={<h1>GRUPOS</h1>} />
        <Route path="/Contacto" element={<h1>CONTACTOS</h1>} />
      </Routes>
=======
      <p></p>
      {productos.map((producto) => (
        <RecipeReviewCard producto={producto} />
      ))}
>>>>>>> 0b01d383f40ab6f20d7ff15d348f84b4eeabc6e4
    </div>
  );
}

export default App;
