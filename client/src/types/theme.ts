export type Theme = "red" | "green" | "blue";

export interface ThemeState {
  theme: Theme;
}

export interface ThemeAction {
  type: "SET_THEME";
  theme: Theme;
}

export interface ThemeContextProps {
  state: ThemeState;
  setTheme: (theme: Theme) => void;
}
