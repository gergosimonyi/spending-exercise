import React from "react";

import { FiltersAndOrderings } from "components/FiltersAndOrderings/FiltersAndOrderings";
import { Form } from "components/Form/Form";
import { SpendingList } from "components/SpendingList/SpendingList";

import { LayoutStyles } from "./Layout.styles";
import { Header } from "../Header/Header";

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
