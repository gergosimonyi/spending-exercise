import React from "react";
import { LdsDualRing } from "./LdsDualRing";
import { LoaderStyles } from "./Loader.styles";

export default function Loader() {
  return (
    <>
      <LoaderStyles>
        <LdsDualRing color={"var(--color-blue)"} />
      </LoaderStyles>
    </>
  );
}
