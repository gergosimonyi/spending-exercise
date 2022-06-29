import styled from "styled-components";

const HeaderStyles = styled.header`
  font-family: var(--font-family-header);

  margin-bottom: 4rem;

  display: flex;
  align-items: center;

  @media (max-width: 756px) {
    margin-bottom: 2rem;
    justify-content: center;
    flex-direction: column;
  }
`;

export { HeaderStyles };
