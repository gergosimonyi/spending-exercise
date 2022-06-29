import React from "react";

import { LineItem } from "./LineItem";
import { Wrapper } from "./LineItemList.styles";

const LineItemList = ({ spendings }) => {
  if (spendings.length === 0) {
    return (
      <h1 style={{ textAlign: "center", marginTop: "4rem" }}>
        Yay!{" "}
        <span role="img" aria-label="jsx-a11y/accessible-emoji">
          🎉
        </span>{" "}
        No spendings!
      </h1>
    );
  }

  return (
    <Wrapper>
      {spendings.map((spending) => (
        <LineItem key={spending.id} {...spending} />
      ))}
    </Wrapper>
  );
};

export { LineItemList };
