import React from "react";
import styled from "styled-components";
import { useTheme } from "../customHook/themeContext";

const Component1 = () => {
  const { primaryColor ,colors } = useTheme();

  return <h1 style={{ color: primaryColor }}>Component1</h1>;
};

export default Component1;
