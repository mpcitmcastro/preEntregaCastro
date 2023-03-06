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
