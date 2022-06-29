import styled from "styled-components";

const IconWrapper = styled.div`
  padding: 8px;
  line-height: 0;
  background-color: var(--color-light-blue);
  border-radius: 12px;
  margin-right: 1.5rem;

  svg {
    width: 28px;
    height: 28px;
  }

  @media (max-width: 756px) {
    margin: 0;

    svg {
      width: 24px;
      height: 24px;
    }
  }
`;

export { IconWrapper };
