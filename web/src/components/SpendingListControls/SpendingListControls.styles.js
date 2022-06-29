import styled from "styled-components";

const CurrencyButton = styled.button`
  border: none;
  font-family: var(--font-family);
  font-size: 20px;
  cursor: pointer;
  background-color: ${(p) =>
    p.active ? "var(--color-light-blue)" : "var(--color-white)"};
  color: ${(p) => (p.active ? "var(--color-blue)" : "inherit")};
  font-weight: ${(p) => (p.active ? "700" : "400")};
  border-radius: 8px;
  padding: 6px 12px;
`;

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

const FiltersWrapper = styled.div`
  display: flex;
  margin-bottom: 2rem;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const Orderings = styled.div`
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
export { CurrencyButton, CurrencyFilters, FiltersWrapper, Orderings };
