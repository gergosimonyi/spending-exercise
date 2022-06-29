import React from "react";

import { LdsDualRing, LoaderStyles } from "./Loader.styles";

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
