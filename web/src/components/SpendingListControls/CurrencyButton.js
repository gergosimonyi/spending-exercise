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

export { CurrencyButton };
