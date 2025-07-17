import { createContext, useContext, useEffect, useState } from "react";

type Theme = "light" | "dark";

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  // Check if user has a theme preference in localStorage or prefers dark mode
  const [theme, setTheme] = useState<Theme>(() => {
    if (typeof window !== "undefined") {
      const savedTheme = window.localStorage.getItem("theme") as Theme | null;
      if (savedTheme) {
        return savedTheme;
      }

      // Check for system preference
      if (
        window.matchMedia &&
        window.matchMedia("(prefers-color-scheme: dark)").matches
      ) {
        return "dark";
      }
    }

    return "light";
  });

  useEffect(() => {
    // Update localStorage when theme changes
    localStorage.setItem("theme", theme);

    // Update document's class for Tailwind dark mode
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};
