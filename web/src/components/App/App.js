import React from "react";

import { SpendingsPage } from "components";

import { GlobalStyle } from "./App.styles";

const App = () => {
  return (
    <>
      <GlobalStyle />
      <SpendingsPage />
    </>
  );
};

export { App };
