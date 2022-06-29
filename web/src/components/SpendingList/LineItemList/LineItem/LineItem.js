import React from "react";
import { FiDollarSign } from "react-icons/fi";
import { DateTime } from "luxon";

import { getLocale } from "constants";

import { Amount } from "./Amount";
import { Description } from "./Description";
import { Icon } from "./Icon";
import { LineItemStyles } from "./LineItem.styles";

const LineItem = ({ amount, currency, description, spent_at }) => {
  return (
    <LineItemStyles>
      <Icon>
        <FiDollarSign color="var(--color-blue)" />
      </Icon>
      <Description>
        <h3>{description}</h3>
        <p>{DateTime.fromISO(spent_at).toFormat("t - MMMM dd, yyyy")}</p>
      </Description>
      <Amount>
        <h3>
          {new Intl.NumberFormat(getLocale(), {
            style: "currency",
            currency: currency,
          }).format((amount / 100).toFixed(2))}
        </h3>
      </Amount>
    </LineItemStyles>
  );
};

export { LineItem };
