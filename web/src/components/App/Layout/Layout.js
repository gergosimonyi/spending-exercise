import React from "react";

import { FiltersAndOrderings } from "components/FiltersAndOrderings/FiltersAndOrderings";
import { Form } from "components/Form/Form";
import { SpendingList } from "components/SpendingList/SpendingList";

import { LayoutStyles } from "./Layout.styles";
import { Main } from "../Main";
import { Header } from "../Header/Header";

const Layout = () => (
  <LayoutStyles>
    <Header />
    <Main>
      <Form />
      <FiltersAndOrderings />
      <SpendingList />
    </Main>
  </LayoutStyles>
);

export { Layout };
