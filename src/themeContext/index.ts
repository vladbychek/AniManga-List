import React, { MouseEventHandler, useContext } from "react";

export type ThemeType = "light" | "dark";

export interface ThemeContextType {
  theme: ThemeType;
  toggler?: MouseEventHandler<HTMLButtonElement>;
}

export const ThemeContext = React.createContext<ThemeContextType>({
  theme: "light",
});

export const useTheme = () => {
  return useContext(ThemeContext);
};
