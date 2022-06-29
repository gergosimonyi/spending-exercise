import styled from "styled-components";

const Spending = styled.article`
  border-radius: 8px;
  box-shadow: var(--box-shadow);
  padding: 1.5rem;
  background-color: var(--color-white);
  display: flex;
  align-items: center;
  margin-bottom: 1.5rem;

  h3,
  p {
    margin: 0;
  }

  h3 {
    line-height: 1.4;
  }

  p {
    color: var(--color-gray);
  }
  @media (max-width: 756px) {
    flex-direction: column;
    padding: 1rem;
  }
`;

export { Spending };
