import React, { useState, useEffect } from "react";

import { ErrorMessage } from "./ErrorMessage";
import { Loader } from "./Loader";
import { LineItemList } from "./LineItemList";

const SpendingList = () => {
  const [spendings, setSpendings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch(`http://localhost:5000/spendings`, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    })
      .then(async (res) => {
        const body = await res.json();
        return {
          status: res.status,
          body,
        };
      })
      .then((response) => {
        if (response.status === 200) {
          setSpendings(response.body);
        }
      })
      .catch((err) => {
        console.error(err);
        setError(true);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [setSpendings]);

  if (loading) return <Loader />;
  if (error) return <ErrorMessage />;
  return <LineItemList spendings={spendings} />;
};

export { SpendingList };
