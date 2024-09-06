"use client"
import { createContext, FC, useContext, useEffect, useState } from "react";

interface ThemeContextType {
  theme: "light" | "dark";
  changeTheme: (newTheme: "light" | "dark") => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);
const localStorageKey = "theme";

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};

export const ThemeProvider: FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [theme, setTheme] = useState<"light" | "dark">("dark");

  const changeTheme = (newTheme: "light" | "dark") => {
    setTheme(newTheme);
    localStorage.setItem(localStorageKey, newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
  };

  useEffect(() => {
    const savedTheme = localStorage.getItem(localStorageKey) || "dark";
    setTheme(savedTheme as "light" | "dark");
    document.documentElement.setAttribute("data-theme", savedTheme);
  }, []);

  return (
    <ThemeContext.Provider value={{ theme, changeTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
