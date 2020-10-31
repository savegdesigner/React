import React, { FunctionComponent, useContext, useState } from "react";

import { MyContext, defaultTheme } from "./context/context";

const App: FunctionComponent = () => {
  const [currentTheme, setCurrentTheme] = useState(defaultTheme.light);

  const toggleTheme = () => {
    currentTheme === defaultTheme.light
      ? setCurrentTheme(defaultTheme.dark)
      : setCurrentTheme(defaultTheme.light);
  };

  return (
    <MyContext.Provider value={currentTheme}>
      <Wrapper>
        <button
          style={{
            backgroundColor: currentTheme.background,
            color: currentTheme.color,
          }}
          onClick={toggleTheme}
        >
          Change Theme
        </button>
      </Wrapper>
    </MyContext.Provider>
  );
};

export default App;

const Wrapper: FunctionComponent = ({ children }) => {
  const theme = useContext(MyContext);

  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: theme.background,
        color: theme.color,
      }}
    >
      {children}
    </div>
  );
};
