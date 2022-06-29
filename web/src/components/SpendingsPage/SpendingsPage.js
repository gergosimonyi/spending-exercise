import React, { useState } from "react";

import { Form, SpendingList, SpendingListControls } from "components";
import {
  defaultFilterOption,
  defaultOrderOption,
} from "components/SpendingListControls";

import { SpendingsPageStyles } from "./SpendingsPage.styles";
import { Header } from "./Header/";

const SpendingsPage = () => {
  const [newestSpending, setNewestSpending] = useState(null);
  const onSuccess = (spending) => {
    setNewestSpending(spending);
  };

  const [filter, setFilter] = useState(defaultFilterOption);
  const [order, setOrder] = useState(defaultOrderOption);

  return (
    <SpendingsPageStyles>
      <Header />
      <main>
        <Form onSuccess={onSuccess} />
        <SpendingListControls
          filter={filter}
          setFilter={setFilter}
          setOrder={setOrder}
        />
        <SpendingList
          filter={filter}
          order={order}
          newestSpending={newestSpending}
        />
      </main>
    </SpendingsPageStyles>
  );
};

export { SpendingsPage };
