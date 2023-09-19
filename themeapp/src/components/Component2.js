import React from "react";
import { useTheme } from "../customHook/themeContext";

const Component2 = () => {
  const { primaryColor, colors } = useTheme();

  return <h1 style={{ color: primaryColor }}>Component1</h1>;
};

export default Component2;
