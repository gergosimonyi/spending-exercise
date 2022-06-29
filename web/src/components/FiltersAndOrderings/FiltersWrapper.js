import styled from "styled-components";

const FiltersWrapper = styled.div`
  display: flex;
  margin-bottom: 2rem;

  @media (max-width: 756px) {
    flex-direction: column;
  }
`;

export { FiltersWrapper };
