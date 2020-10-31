import { createContext } from "react";

interface Theme {
  background: string;
  color: string;
}

export const defaultTheme = {
  light: {
    background: "#fafafa",
    color: "#222222",
  },
  dark: {
    background: "#222222",
    color: "#fafafa",
  },
};

export const MyContext = createContext<Theme>(defaultTheme.light);
