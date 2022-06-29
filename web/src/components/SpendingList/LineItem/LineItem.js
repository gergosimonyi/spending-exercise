import React from "react";
import { FiDollarSign } from "react-icons/fi";
import { DateTime } from "luxon";

import { getLocale } from "constants";

import { AmountWrapper } from "./AmountWrapper";
import { IconWrapper } from "./IconWrapper";
import { LineItemStyles } from "./LineItem.styles";
import { TextWrapper } from "./TextWrapper";

const LineItem = ({ amount, currency, description, spent_at }) => {
  return (
    <LineItemStyles>
      <IconWrapper>
        <FiDollarSign color="var(--color-blue)" />
      </IconWrapper>
      <TextWrapper>
        <h3>{description}</h3>
        <p>{DateTime.fromISO(spent_at).toFormat("t - MMMM dd, yyyy")}</p>
      </TextWrapper>
      <AmountWrapper>
        <h3>
          {new Intl.NumberFormat(getLocale(), {
            style: "currency",
            currency: currency,
          }).format((amount / 100).toFixed(2))}
        </h3>
      </AmountWrapper>
    </LineItemStyles>
  );
};

export { LineItem };
