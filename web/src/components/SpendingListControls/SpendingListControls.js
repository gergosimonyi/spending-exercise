import React from "react";

import { currencies } from "constants";

import { CurrencyButton } from "./CurrencyButton";
import { CurrencyFilters } from "./CurrencyFilters";
import { FiltersWrapper } from "./FiltersWrapper";
import { Orderings } from "./Orderings";

const currencyFilterOptions = ["ALL", ...currencies];

const SpendingListControls = () => {
  return (
    <>
      <FiltersWrapper>
        <Orderings>
          <select>
            <option value="-date">Sort by Date descending (default)</option>
            <option value="date">Sort by Date ascending</option>
            <option value="-amount_in_huf">Sort by Amount descending</option>
            <option value="amount_in_huf">Sort by Amount ascending</option>
          </select>
        </Orderings>
        <CurrencyFilters>
          {currencyFilterOptions.map((currencyFilterOption) => (
            <li key={currencyFilterOption}>
              <CurrencyButton name={currencyFilterOption}>
                {currencyFilterOption}
              </CurrencyButton>
            </li>
          ))}
        </CurrencyFilters>
      </FiltersWrapper>
    </>
  );
};

export { SpendingListControls };
