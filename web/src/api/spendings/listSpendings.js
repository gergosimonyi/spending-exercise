import { endpoints } from "..";

const listSpendings = async ({ filter, order }) => {
  const url = `${endpoints.spendings}?filter=${filter}&order=${order}`;

  const response = await fetch(url);
  const spendings = await response.json();

  return spendings;
};

export { listSpendings };
