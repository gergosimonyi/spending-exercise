import styled from "styled-components";

const LoaderStyles = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const LdsDualRing = styled.div`
  display: inline-block;
  width: 80px;
  height: 80px;

  &::after {
    content: " ";
    display: block;
    width: 64px;
    height: 64px;
    margin: 8px;
    border-radius: 50%;
    border: 6px solid var(--color-blue);
    border-color: var(--color-blue) transparent var(--color-blue) transparent;
    animation: lds-dual-ring 1.2s linear infinite;
  }

  @keyframes lds-dual-ring {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

export { LoaderStyles, LdsDualRing };
