import React from "react";

import { Form, SpendingList, SpendingListControls } from "components";

import { SpendingsPageStyles } from "./SpendingsPage.styles";
import { Header } from "./Header/";

const SpendingsPage = () => (
  <SpendingsPageStyles>
    <Header />
    <main>
      <Form />
      <SpendingListControls />
      <SpendingList />
    </main>
  </SpendingsPageStyles>
);

export { SpendingsPage };
