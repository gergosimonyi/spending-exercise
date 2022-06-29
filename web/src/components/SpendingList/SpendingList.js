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
    let isMounted = true;

    (async () => {
      setLoading(true);

      try {
        const spendings = await listSpendings({ currency, order });

        if (!isMounted) return;
        setSpendings(spendings);
        setError(false);
      } catch {
        if (!isMounted) return;
        setError(true);
      } finally {
        if (!isMounted) return;
        setLoading(false);
      }
    })();

    return () => {
      isMounted = false;
    };
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
