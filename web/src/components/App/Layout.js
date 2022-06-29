import React from "react";

import { FiltersAndOrderings } from "components/FiltersAndOrderings/FiltersAndOrderings";
import { Form } from "components/Form/Form";
import { Header } from "components/Header/Header";
import { SpendingList } from "components/SpendingList/SpendingList";

import { Main } from "./ComponentStyles";

const Layout = () => (
  <>
    <Header />
    <Main>
      <Form />
      <FiltersAndOrderings />
      <SpendingList />
    </Main>
  </>
);

export { Layout };
