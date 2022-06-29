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

  if (400 <= response.status && response.status < 500) {
    const errors = await response.json();
    const errorsArray = [];

    for (let key in errors) {
      errors[key].forEach((error) => {
        errorsArray.push(`${key}: ${error}`);
      });
    }

    throw new APIError(errorsArray);
  }

  const persistedSpending = await response.json();
  return persistedSpending;
};

export { createSpending };
