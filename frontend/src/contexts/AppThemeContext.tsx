import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

interface ThemeContextInterface {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
}

interface ThemeProviderProps {
  children: ReactNode;
}

const ThemeContext = createContext<ThemeContextInterface>(
  {} as ThemeContextInterface
);

function AppThemeProvider({ children }: ThemeProviderProps) {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => setIsDarkMode((dark) => !dark);

  useEffect(
    function () {
      if (isDarkMode) document.documentElement.classList.add("dark-mode");
      else document.documentElement.classList.remove("dark-mode");
    },
    [isDarkMode, setIsDarkMode]
  );

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleDarkMode }}>
      {children}
    </ThemeContext.Provider>
  );
}

function useDarkMode(): ThemeContextInterface {
  const context = useContext(ThemeContext);

  if (!context)
    throw new Error("ThemeContext is used outside of AppThemeProvider");

  return context;
}

// eslint-disable-next-line react-refresh/only-export-components
export { AppThemeProvider, useDarkMode };
