import React from "react";

import { currencyOptions } from "./currencyOptions";
import { orderOptions } from "./orderOptions";
import {
  CurrencyButton,
  CurrencyFilters,
  FiltersWrapper,
  Orderings,
} from "./SpendingListControls.styles";

const SpendingListControls = ({ currency, setCurrency, setOrder }) => {
  const handleFilterChange = (event) => {
    setCurrency(event.target.value);
  };

  const handleOrderChange = (event) => {
    setOrder(event.target.value);
  };

  return (
    <>
      <FiltersWrapper>
        <Orderings>
          <select onChange={handleOrderChange}>
            {orderOptions.map((orderOption) => (
              <option key={orderOption.value} value={orderOption.value}>
                {orderOption.description}
              </option>
            ))}
          </select>
        </Orderings>
        <CurrencyFilters>
          {currencyOptions.map((currencyOption) => (
            <li key={currencyOption.description}>
              <CurrencyButton
                active={currencyOption.value === currency}
                value={currencyOption.value}
                onClick={handleFilterChange}
              >
                {currencyOption.description}
              </CurrencyButton>
            </li>
          ))}
        </CurrencyFilters>
      </FiltersWrapper>
    </>
  );
};

export { SpendingListControls };
