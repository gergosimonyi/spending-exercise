import styled from "styled-components";

const LineItemStyles = styled.li`
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
  @media (max-width: 768px) {
    flex-direction: column;
    padding: 1rem;
  }
`;

const Amount = styled.div`
  margin-left: auto;
  margin-right: 1rem;

  @media (max-width: 768px) {
    margin: 0.5rem 0;
  }
`;

const Description = styled.div`
  @media (max-width: 768px) {
    text-align: center;
    margin: 0.5rem 0;
  }
`;

const Icon = styled.div`
  padding: 8px;
  line-height: 0;
  background-color: var(--color-light-blue);
  border-radius: 12px;
  margin-right: 1.5rem;

  svg {
    width: 28px;
    height: 28px;
  }

  @media (max-width: 768px) {
    margin: 0;

    svg {
      width: 24px;
      height: 24px;
    }
  }
`;

export { LineItemStyles, Amount, Description, Icon };
