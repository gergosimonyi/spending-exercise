import styled from "styled-components";

const ErrorMessage = styled.h1`
  text-align: center;
  margin: 4rem auto;
  font-size: 20px;
  background-color: var(--color-red);
  color: var(--color-white);
  padding: 10px 15px;
  border-radius: 8px;
  max-width: 80%;

  ul {
    text-align: initial;
  }
`;

export { ErrorMessage };
