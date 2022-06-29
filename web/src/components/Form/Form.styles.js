import styled from "styled-components";

const Wrapper = styled.form`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-bottom: 4rem;
`;

const Input = styled.input`
  font-family: var(--font-family);
  border: none;
  padding: 10px 15px;
  font-size: 18px;
  font-weight: 700;
  border-radius: 8px;
  box-shadow: var(--box-shadow);
  color: var(--color-dark-gray);

  &:focus {
    border-radius: 8px;
    color: var(--color-blue);
  }

  &[type="text"] {
    flex: 1;
  }

  &[type="number"] {
    width: 150px;
  }

  &[type="submit"] {
    background-color: var(--color-green);
    color: var(--color-white);
    cursor: pointer;
    transition: all 0.3s;

    &:hover {
      transform: translateY(-2px);
    }

    &:active {
      transform: translateY(0px);
    }
  }
`;

const Select = styled.select`
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
  font-weight: 700;
  border-radius: 8px;
  box-shadow: var(--box-shadow);
  min-width: 80px;
`;

export { Wrapper, Input, Select };
