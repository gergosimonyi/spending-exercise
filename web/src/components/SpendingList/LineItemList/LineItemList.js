import React from "react";

import { LineItem } from "./LineItem";
import { LineItemListStyles } from "./LineItemList.styles";

const LineItemList = ({ spendings }) => {
  return (
    <LineItemListStyles>
      {spendings.map((spending) => (
        <LineItem key={spending.id} {...spending} />
      ))}
    </LineItemListStyles>
  );
};

export { LineItemList };
