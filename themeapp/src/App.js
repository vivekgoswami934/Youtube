import logo from "./logo.svg";
import "./App.css";
import styled from "styled-components";
import ColorPicker from "./components/ColorPicker";
import { useState } from "react";
import Component2 from "./components/Component2";
import Component1 from "./components/Component1";
import Navbar from "./components/Navbar";

function App() {
  const [show, setShow] = useState(false);

  const handleShow = () => {
    setShow((p) => !p);
  };

  return (
    <Component>
      <Navbar />
      <Component1 />
      <Component2 />
      <ColorPickerWrapper onClick={handleShow} show={show}>
        <ColorPicker />
      </ColorPickerWrapper>
    </Component>
  );
}

export default App;

const Component = styled.div`
  height: 100vh;
  width: 100%;
`;
const ColorPickerWrapper = styled.div`
  position: fixed;
  right: 0rem;
  bottom: 2rem;
  /* transform: translateX(80%); */
  transform: ${({ show }) => `translateX(${show ? "0%" : "80%"})`};
  transition: all 0.3s ease;
`;
