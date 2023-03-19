<<<<<<< HEAD
const ButtonJSX = ({ text, handleclick }) => {
  //const ButtonJSX = ({ text, link }) => {
  return <button onClick={() => handleclick(text)}>{text}</button>;
  //return <button onClick={() => link(link)}> {text} </button>;
};

export default ButtonJSX;
=======
const ButtonJSX = ({ text, handleclick }) => {
  return <button onClick={() => handleclick(text)}>{text}</button>;
};

export default ButtonJSX;
>>>>>>> 0b01d383f40ab6f20d7ff15d348f84b4eeabc6e4
