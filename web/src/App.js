import React from "react";

import { FiltersAndOrderings } from "components/FiltersAndOrderings/FiltersAndOrderings";
import { Form } from "components/Form/Form";
import { Header } from "components/Header/Header";
import { Main } from "styles/ComponentStyles";
import { SpendingList } from "components/SpendingList/SpendingList";

const App = () => {
  return (
    <>
      <Header />
      <Main>
        <Form />
        <FiltersAndOrderings />
        <SpendingList />
      </Main>
    </>
  );
};

export { App };
