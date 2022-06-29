import styled from "styled-components";

export const CurrencyFilters = styled.ul`
  list-style-type: none;
  display: flex;
  padding: 0;
  gap: 1rem;
  margin-left: auto;

  @media (max-width: 756px) {
    margin-left: unset;
  }
`;
