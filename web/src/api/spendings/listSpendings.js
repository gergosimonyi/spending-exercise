import { endpoints } from "..";

const listSpendings = async ({ currency, order }) => {
  const url = `${endpoints.spendings}?currency=${currency}&order=${order}`;

  const response = await fetch(url);
  const spendings = await response.json();

  return spendings;
};

export { listSpendings };
