import React, { useState, useRef } from "react";

import { createSpending } from "api";
import { ErrorMessage } from "components";
import { currencies, defaultCurrency } from "constants";
import { APIError } from "errors";

import { FormStyles, InputStyles, SelectStyles } from "./Form.styles";

const defaultState = {
  description: "",
  amount: 0,
  currency: defaultCurrency,
};

const Form = ({ onSuccess }) => {
  const [state, setState] = useState({ ...defaultState });
  const [errors, setErrors] = useState([]);
  const firstFormField = useRef(null);

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

    try {
      const persistedSpending = await createSpending(spending);
      onSuccess(persistedSpending);

      setErrors([]);
      setState({ ...defaultState });
      firstFormField.current.focus();
    } catch (error) {
      if (error instanceof APIError) {
        setErrors(error.getErrors());
      } else {
        setErrors(["Unknown error"]);
      }
    }
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
          ref={firstFormField}
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
      {errors.length > 0 && (
        <ErrorMessage>
          <ul>
            {errors.map((error) => (
              <li key={error}>{error}</li>
            ))}
          </ul>
        </ErrorMessage>
      )}
    </>
  );
};

export { Form };
