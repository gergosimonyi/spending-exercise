import React, { useState, useEffect } from "react";

import { listSpendings } from "api";

import { ErrorMessage } from "./ErrorMessage";
import { Loader } from "./Loader";
import { LineItemList } from "./LineItemList";

const SpendingList = ({ filter, order, newestSpending }) => {
  const [spendings, setSpendings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    (async () => {
      setLoading(true);

      try {
        setSpendings(await listSpendings({ filter, order }));
      } catch {
        setError(true);
      } finally {
        setLoading(false);
      }
    })();
  }, [filter, order, newestSpending]);

  if (loading) return <Loader />;
  if (error) return <ErrorMessage />;
  return <LineItemList spendings={spendings} />;
};

export { SpendingList };
