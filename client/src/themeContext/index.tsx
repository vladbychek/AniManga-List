import React, {
  MouseEventHandler,
  ReactElement,
  useContext,
  useState,
} from "react";

export type ThemeType = "light" | "dark";

export interface ThemeContextType {
  theme: ThemeType;
  toggler?: MouseEventHandler<HTMLButtonElement>;
}

export const ThemeContext = React.createContext<ThemeContextType>({
  theme: "light",
});
type ThemeProviderProps = {
  children: ReactElement;
};

export const useTheme = () => {
  return useContext(ThemeContext);
};

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const [myTheme, setMyTheme] = useState<ThemeType>("light");

  const switchTheme = () => {
    if (myTheme === "light") {
      setMyTheme("dark");
      document.body.style.backgroundColor = "black";
    } else {
      setMyTheme("light");
      document.body.style.backgroundColor = "white";
    }
  };

  return (
    <ThemeContext.Provider value={{ theme: myTheme, toggler: switchTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
