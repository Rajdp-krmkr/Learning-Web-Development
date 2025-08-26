import React, { useContext } from "react";
import ThemeChanger from "./components/ThemeChanger";
import ThemeProvider, { ThemeContext } from "./context/ThemeProvider";

const App = () => {
  const { darkTheme, toggleTheme } = useContext(ThemeContext);

  return (
    <div
      style={{
        backgroundColor: darkTheme ? "black" : "white",
        color: darkTheme ? "white" : "black",
        width: "100vw",
        height: "100vh",
        transition: "background-color 0.5s, color 0.5s",
      }}
    >
      This is theme-provider app
      <ThemeChanger />
    </div>
  );
};

export default App;
