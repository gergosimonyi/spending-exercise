import React, { useState } from "react";

import { Form, SpendingList, SpendingListControls } from "components";

import { SpendingsPageStyles } from "./SpendingsPage.styles";
import { Header } from "./Header/";

const SpendingsPage = () => {
  const [newestSpending, setNewestSpending] = useState(null);
  const onSuccess = (spending) => {
    setNewestSpending(spending);
  };

  return (
    <SpendingsPageStyles>
      <Header />
      <main>
        <Form onSuccess={onSuccess} />
        <SpendingListControls />
        <SpendingList newestSpending={newestSpending} />
      </main>
    </SpendingsPageStyles>
  );
};

export { SpendingsPage };
