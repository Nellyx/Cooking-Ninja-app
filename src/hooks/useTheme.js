import { ThemeContext } from "../context/ThemeContext";
import React, { useContext } from "react";

export const useTheme = () => {
  const context = useContext(ThemeContext);

  if (context === undefined) {
    throw new Error("useTheme() must be wrapped inside a the provider");
  }

  return context;
};
