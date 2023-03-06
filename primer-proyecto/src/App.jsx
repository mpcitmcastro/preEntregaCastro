import "./App.css";
import { useState } from "react";
import ButtonJSX from "./components/ButtonJSX";
//import { Button } from "@mui/material";
// import DeleteIcon from "@mui/icons-material/Delete";
// import SendIcon from "@mui/icons-material/Send";
import RecipeReviewCard from "./components/RecipeReviewCard";
import productos from "../productos";
import Navbar from "./components/Navbar";

function App() {
  console.log(productos);
  return (
    <div>
      <Navbar />
      <p></p>
      {/* // <div className="container">
    //   <h2 
    //     style={{
    //       color: "white",
    //       backgroundColor: "Blue",
    //     }}
    //   >
    //     MPCIT
    //   </h2> */}
      {productos.map((producto) => (
        <RecipeReviewCard producto={producto} />
      ))}
      {/* <Button variant="outlined" startIcon={<DeleteIcon />}>
        Delete
      </Button>
      <Button variant="contained" endIcon={<SendIcon />}>
        Send
      </Button> */}
    </div>
  );
}

export default App;
