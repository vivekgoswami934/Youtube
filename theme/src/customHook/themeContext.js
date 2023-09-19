// ColorContext.js
import { createContext, useContext, useState } from "react";

// Create the context
const ColorContext = createContext();

// Create a provider component
export const ColorProvider = ({ children }) => {
  const [primaryColor, setPrimaryColor] = useState("#007bff"); // Default primary color

  //colors
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

  const setColor = (newColor) => {
    setPrimaryColor(newColor);
  };

  return (
    <ColorContext.Provider value={{ primaryColor, setColor, colors }}>
      {children}
    </ColorContext.Provider>
  );
};

// Create a custom hook for using the context
export const useTheme = () => {
  return useContext(ColorContext);
};
