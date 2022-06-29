import { APIError } from "errors";

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

  if (response.status >= 400) {
    const error = await response.json();
    throw new APIError(error.message);
  }

  const persistedSpending = await response.json();
  return persistedSpending;
};

export { createSpending };
