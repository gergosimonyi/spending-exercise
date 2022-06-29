import React, { useState, useEffect } from "react";
import { FiDollarSign } from "react-icons/fi";
import { DateTime } from "luxon";

import { getLocale } from "constants/locale";

import { AmountWrapper } from "./AmountWrapper";
import { ErrorMessage } from "./ErrorMessage";
import { IconWrapper } from "./IconWrapper";
import { Loader } from "./Loader/Loader";
import { Spending } from "./Spending";
import { TextWrapper } from "./TextWrapper";

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

  return (
    <>
      {error && (
        <ErrorMessage>
          The server is probably down. Please try again later.
        </ErrorMessage>
      )}
      {!spendings.length && !error && (
        <h1 style={{ textAlign: "center", marginTop: "4rem" }}>
          Yay!{" "}
          <span role="img" aria-label="jsx-a11y/accessible-emoji">
            🎉
          </span>{" "}
          No spendings!
        </h1>
      )}
      {spendings.length > 0 &&
        spendings.map((spending) => (
          <Spending key={spending.id}>
            <IconWrapper>
              <FiDollarSign color="var(--color-blue)" />
            </IconWrapper>
            <TextWrapper>
              <h3>{spending.description}</h3>
              <p>
                {DateTime.fromISO(spending.spent_at).toFormat(
                  "t - MMMM dd, yyyy"
                )}
              </p>
            </TextWrapper>
            <AmountWrapper>
              <h3>
                {new Intl.NumberFormat(getLocale(), {
                  style: "currency",
                  currency: spending.currency,
                }).format((spending.amount / 100).toFixed(2))}
              </h3>
            </AmountWrapper>
          </Spending>
        ))}
    </>
  );
};

export { SpendingList };
