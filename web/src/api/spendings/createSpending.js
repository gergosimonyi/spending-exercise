import { endpoints } from "..";

const createSpending = async (spending) => {
  const response = await fetch(endpoints.spendings, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(spending),
  });
  const persistedSpending = await response.json();

  return persistedSpending;
};

export { createSpending };
