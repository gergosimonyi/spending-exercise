import { currencies } from "lib";

const currencyOptions = [
  {
    description: "ALL",
    value: "",
  },
  ...currencies.map((currency) => ({ description: currency, value: currency })),
];

const defaultCurrencyOption = currencyOptions[0];

export { currencyOptions, defaultCurrencyOption };
