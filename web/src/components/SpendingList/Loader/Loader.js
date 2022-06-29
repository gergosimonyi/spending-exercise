import React from "react";

import { LdsDualRing } from "./LdsDualRing";
import { LoaderStyles } from "./Loader.styles";

const Loader = () => {
  return (
    <>
      <LoaderStyles>
        <LdsDualRing color={"var(--color-blue)"} />
      </LoaderStyles>
    </>
  );
};

export { Loader };
