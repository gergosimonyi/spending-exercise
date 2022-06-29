import React from "react";

import { LdsDualRing, Wrapper } from "./Loader.styles";

const Loader = () => {
  return (
    <>
      <Wrapper>
        <LdsDualRing color={"var(--color-blue)"} />
      </Wrapper>
    </>
  );
};

export { Loader };
