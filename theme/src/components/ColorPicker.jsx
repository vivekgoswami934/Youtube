import React from "react";
import { useTheme } from "../customHook/themeContext";
import styled, { keyframes } from "styled-components";
import { BsFillGearFill } from "react-icons/bs";

const colors = [
  "#c4096a",
  "#64ce23",
  "#ec1839",
  "#bc06b6",
  "#d4d119",
  "#f021b2",
  "#fa5b0f",
  "#37b182",
  "#49bdf3",
  "#1854b4",
];

const ColorPicker = () => {
  const { setColor } = useTheme();
  return (
    <Wrapper>
      <Circle color={"transparent"}>
        <RotatingDiv>
          <BsFillGearFill size="2rem" />
        </RotatingDiv>
      </Circle>
      <ColorWrapper>
        {colors.map((color) => (
          <Circle onClick={() => setColor(color)} color={color}></Circle>
        ))}
      </ColorWrapper>
    </Wrapper>
  );
};

export default ColorPicker;

const Wrapper = styled.div`
  display: flex;
  gap: 1rem;
`;
const Circle = styled.div`
  height: 2rem;
  width: 2rem;
  background-color: ${({ color }) => color || "black"};

  border-radius: 50%;
`;

const ColorWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.15rem;
  max-width: 12rem;
`;

// Define a keyframe animation
const rotateAnimation = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

// Create a styled component with the animation
const RotatingDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2rem;
  height: 2rem;
  animation: ${rotateAnimation} 4s linear infinite; /* Adjust the duration and timing function as needed */
`;
