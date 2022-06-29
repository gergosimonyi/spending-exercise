import { endpoints } from "..";

const listSpendings = async () => {
  const response = await fetch(endpoints.spendings);
  const spendings = await response.json();

  return spendings;
};

export { listSpendings };
