import React, { useState } from "react";

import { Form, SpendingList, SpendingListControls } from "components";
import {
  defaultCurrencyOption,
  defaultOrderOption,
} from "components/SpendingListControls";

import { Wrapper } from "./SpendingsPage.styles";
import { Header } from "./Header/";

const SpendingsPage = () => {
  const [newestSpending, setNewestSpending] = useState(null);
  const onSuccess = (spending) => {
    setNewestSpending(spending);
  };

  const [currency, setCurrency] = useState(defaultCurrencyOption.value);
  const [order, setOrder] = useState(defaultOrderOption.value);

  return (
    <Wrapper>
      <Header />
      <main>
        <Form onSuccess={onSuccess} />
        <SpendingListControls
          currency={currency}
          setCurrency={setCurrency}
          setOrder={setOrder}
        />
        <SpendingList
          currency={currency}
          order={order}
          newestSpending={newestSpending}
        />
      </main>
    </Wrapper>
  );
};

export { SpendingsPage };
