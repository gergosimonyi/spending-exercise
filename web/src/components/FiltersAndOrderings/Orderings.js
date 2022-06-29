import styled from "styled-components";

export const Orderings = styled.div`
  display: flex;
  align-items: center;

  select {
    appearance: none;
    border: none;
    margin: 0;
    font-family: inherit;
    font-size: inherit;
    cursor: inherit;
    line-height: inherit;

    padding: 10px;
    font-family: var(--font-family);
    font-size: 18px;
    border-radius: 8px;
    border: 1px solid var(--color-dark-gray);
  }
`;
