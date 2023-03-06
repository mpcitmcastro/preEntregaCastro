const ButtonJSX = ({ text, handleclick }) => {
  return <button onClick={() => handleclick(text)}>{text}</button>;
};

export default ButtonJSX;
