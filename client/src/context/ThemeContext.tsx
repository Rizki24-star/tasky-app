import React, { createContext, useReducer, useContext, useEffect } from "react";
import {
  Theme,
  ThemeState,
  ThemeAction,
  ThemeContextProps,
} from "../types/theme";

const ThemeContext = createContext<ThemeContextProps | undefined>(undefined);

const themeReducer = (state: ThemeState, action: ThemeAction): ThemeState => {
  switch (action.type) {
    case "SET_THEME":
      return {
        theme: action.theme,
      };
    default:
      return state;
  }
};

const initialThemeState = (): ThemeState => {
  const storedTheme = localStorage.getItem("theme") as Theme | null;
  return { theme: storedTheme || "blue" };
};

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [state, dispatch] = useReducer(themeReducer, initialThemeState());

  const setTheme = (theme: Theme) => {
    dispatch({ type: "SET_THEME", theme });
  };

  useEffect(() => {
    localStorage.setItem("theme", state.theme);
  }, [state.theme]);

  const value = { state, setTheme };
  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};

export const useTheme = (): ThemeContextProps => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};
