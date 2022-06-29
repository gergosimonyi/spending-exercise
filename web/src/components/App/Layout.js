import React from "react";

import { FiltersAndOrderings } from "components/FiltersAndOrderings/FiltersAndOrderings";
import { Form } from "components/Form/Form";
import { SpendingList } from "components/SpendingList/SpendingList";

import { Main } from "./Main";
import { Header } from "./Header/Header";

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
