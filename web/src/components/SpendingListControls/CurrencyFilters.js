import styled from "styled-components";

const CurrencyFilters = styled.ul`
  list-style-type: none;
  display: flex;
  padding: 0;
  gap: 1rem;
  margin-left: auto;

  @media (max-width: 768px) {
    margin-left: unset;
  }
`;

export { CurrencyFilters };
