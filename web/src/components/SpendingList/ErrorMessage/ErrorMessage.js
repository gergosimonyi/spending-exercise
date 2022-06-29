import React from "react";

import { ErrorMessageStyles } from "./ErrorMessageStyles";

const ErrorMessage = () => {
  return (
    <ErrorMessageStyles>
      The server is probably down. Please try again later.
    </ErrorMessageStyles>
  );
};

export { ErrorMessage };
