import React from "react";

import { FiltersAndOrderings, Form, SpendingList } from "components";

import { SpendingsPageStyles } from "./SpendingsPage.styles";
import { Header } from "./Header/";

const SpendingsPage = () => (
  <SpendingsPageStyles>
    <Header />
    <main>
      <Form />
      <FiltersAndOrderings />
      <SpendingList />
    </main>
  </SpendingsPageStyles>
);

export { SpendingsPage };
