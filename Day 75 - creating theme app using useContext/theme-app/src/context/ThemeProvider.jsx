import { createContext, useState } from "react";

export const ThemeContext = createContext(null);

const ThemeProvider = ({ children }) => {
  const [darkTheme, setDarkTheme] = useState(false); //false

  const toggleTheme = () => {
    setDarkTheme(!darkTheme);
  };

  return (
    <ThemeContext.Provider value={{ darkTheme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
