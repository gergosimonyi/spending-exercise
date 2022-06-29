import React from "react";

import { FiltersAndOrderings, Form, SpendingList } from "components";

import { LayoutStyles } from "./Layout.styles";
import { Header } from "../Header/";

const Layout = () => (
  <LayoutStyles>
    <Header />
    <main>
      <Form />
      <FiltersAndOrderings />
      <SpendingList />
    </main>
  </LayoutStyles>
);

export { Layout };
