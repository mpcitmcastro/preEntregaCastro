<<<<<<< HEAD
import "./Navbar.css";
import ButtonJSX from "../ButtonJSX";
import { BsFillCartFill } from "react-icons/bs";
import { Button } from "@mui/material";

const Navbar = () => {
  const handleclick = (name) => {
    alert("Aprete el " + name);
  };
  // const link = (name) => {
  // link = name;
  // };
  return (
    <nav className="container">
      <Button href="/" variant="outlined">
        HOME
      </Button>
      <Button href="/Lista" variant="outlined">
        Lista
      </Button>
      <Button href="/Contacto" variant="outlined">
        Contacto
      </Button>
      <Button href="/Grupos" variant="outlined">
        Grupos
      </Button>
      {/* <ButtonJSX text="HOME" handleclick={handleclick} /> */}
      {/* <ButtonJSX text="Contacto" handleclick={handleclick} /> */}
      {/* <ButtonJSX text="Grupos" handleclick={handleclick} /> */}
      <BsFillCartFill handleclick={handleclick} />
    </nav>
  );
};

export default Navbar;
=======
import "./Navbar.css";
import ButtonJSX from "../ButtonJSX";
import { BsFillCartFill } from "react-icons/bs";

const Navbar = () => {
  const handleclick = (name) => {
    alert("Aprete el " + name);
  };
  return (
    <nav className="container">
      <ButtonJSX text="Home" handleclick={handleclick} />
      <ButtonJSX text="Contacto" handleclick={handleclick} />
      <BsFillCartFill />
      <p>0</p>
    </nav>
  );
};

export default Navbar;
>>>>>>> 0b01d383f40ab6f20d7ff15d348f84b4eeabc6e4
