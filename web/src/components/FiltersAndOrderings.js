import React from "react";

import {
  FiltersWrapper,
  Orderings,
  CurrencyFilters,
  CurrencyButton,
} from "../styles/ComponentStyles";
import { currencies } from "../constants/currencies";

const currencyFilterOptions = ["ALL", ...currencies];

export default function CurrencyFilter() {
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
}
