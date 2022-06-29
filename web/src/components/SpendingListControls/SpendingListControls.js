import React from "react";

import { currencyOptions } from "./currencyOptions";
import { orderOptions } from "./orderOptions";
import {
  Button,
  Currencies,
  Orders,
  Wrapper,
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
      <Wrapper>
        <Orders>
          <select onChange={handleOrderChange} name="order">
            {orderOptions.map((orderOption) => (
              <option key={orderOption.value} value={orderOption.value}>
                {orderOption.description}
              </option>
            ))}
          </select>
        </Orders>
        <Currencies>
          {currencyOptions.map((currencyOption) => (
            <li key={currencyOption.description}>
              <Button
                active={currencyOption.value === currency}
                value={currencyOption.value}
                onClick={handleFilterChange}
              >
                {currencyOption.description}
              </Button>
            </li>
          ))}
        </Currencies>
      </Wrapper>
    </>
  );
};

export { SpendingListControls };
