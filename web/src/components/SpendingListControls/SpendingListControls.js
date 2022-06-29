import React from "react";

import { filterOptions } from "./filterOptions";
import { orderOptions } from "./orderOptions";
import { CurrencyButton } from "./CurrencyButton";
import { CurrencyFilters } from "./CurrencyFilters";
import { FiltersWrapper } from "./FiltersWrapper";
import { Orderings } from "./Orderings";

const SpendingListControls = ({ filter, setFilter, setOrder }) => {
  const handleFilterChange = (event) => {
    setFilter(event.target.value);
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
              <option key={orderOption.name} value={orderOption.name}>
                {orderOption.description}
              </option>
            ))}
          </select>
        </Orderings>
        <CurrencyFilters>
          {filterOptions.map((filterOption) => (
            <li key={filterOption}>
              <CurrencyButton
                active={filterOption === filter}
                value={filterOption}
                onClick={handleFilterChange}
              >
                {filterOption}
              </CurrencyButton>
            </li>
          ))}
        </CurrencyFilters>
      </FiltersWrapper>
    </>
  );
};

export { SpendingListControls };
