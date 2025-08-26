import React, { useContext, useEffect } from "react";
import ThemeProvider, { ThemeContext } from "../context/ThemeProvider";

const ThemeChanger = () => {
  const { darkTheme, toggleTheme } = useContext(ThemeContext);

  useEffect(() => {
    console.log(darkTheme);
  }, [darkTheme]);

  //   useEffect(() => {}, []); // when page loads, runs only once
  //   useEffect(() => {}, [variable1, variable2]);
  //   when variable changes, runs depending upon the change of variable
  //   useEffect(() => {});

  return (
    <button
      onClick={() => {
        toggleTheme();
      }}
    >
      Switch to {darkTheme ? "light-theme" : "dark-theme"}
    </button>
  );
};

export default ThemeChanger;
