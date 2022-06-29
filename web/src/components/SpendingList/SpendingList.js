import React, { useState, useEffect } from "react";

import { listSpendings } from "api";
import { ErrorMessage } from "components";

import { Loader } from "./Loader";
import { LineItemList } from "./LineItemList";

const SpendingList = ({ currency, order, newestSpending }) => {
  const [spendings, setSpendings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    (async () => {
      setLoading(true);

      try {
        setSpendings(await listSpendings({ currency, order }));
        setError(false);
      } catch {
        setError(true);
      } finally {
        setLoading(false);
      }
    })();
  }, [currency, order, newestSpending]);

  if (loading) return <Loader />;
  if (error) {
    return (
      <ErrorMessage>
        The server is probably down. Please try again later.
      </ErrorMessage>
    );
  }
  return <LineItemList spendings={spendings} />;
};

export { SpendingList };
