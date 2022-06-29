import React, { useState } from "react";

import { createSpending } from "api";
import { currencies, defaultCurrency } from "constants";

import { FormStyles } from "./Form.styles";
import { InputStyles } from "./Input.styles";
import { SelectStyles } from "./Select.styles";

const Form = () => {
  const [state, setState] = useState({
    description: "",
    amount: 0,
    currency: defaultCurrency,
  });

  const handleChange = (event) => {
    const { name, value } = event.target;

    setState({
      ...state,
      [name]: value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const spending = {
      ...state,
      amount: 100 * state.amount,
    };

    await createSpending(spending);
  };

  return (
    <>
      <FormStyles onSubmit={handleSubmit}>
        <InputStyles
          type="text"
          placeholder="description"
          name="description"
          value={state.description}
          onChange={handleChange}
        />
        <InputStyles
          type="number"
          placeholder="amount"
          name="amount"
          value={state.amount}
          onChange={handleChange}
        />
        <SelectStyles
          name="currency"
          value={state.currency}
          onChange={handleChange}
        >
          {currencies.map((currency) => (
            <option key={currency} value={currency}>
              {currency}
            </option>
          ))}
        </SelectStyles>
        <InputStyles type="submit" value="Save" />
      </FormStyles>
    </>
  );
};

export { Form };
