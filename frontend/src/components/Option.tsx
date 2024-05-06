import { useState } from "react";
import styled from "styled-components";

const Input = styled.input`
  border: 1px solid var(--color-gray-200);
  background-color: var(--bg-base);
  border: 0;
  padding: 0.6rem;
  color: var(--color-gray-700);
  font-family: inherit;
  letter-spacing: 0.5px;
  outline: 0;
  border: 0.2rem solid transparent;
  border-radius: 6px;

  &:focus-visible {
    border: 0.2rem solid var(--color-blue-800);
  }

  &:disabled {
    cursor: not-allowed;
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 1rem;
`;

const CheckBox = styled.input`
  accent-color: var(--color-green-600);
  cursor: pointer;
`;

type Props = {
  isEdit: boolean;
  answer: number;
  index: number;
  option: string;
  onClick: (arg: number) => void;
};

function Option({ isEdit, index, onClick, answer, option }: Props) {
  const [value, setValue] = useState(option);
  return (
    <Grid>
      <CheckBox
        disabled={!isEdit}
        type="checkbox"
        checked={answer === index}
        onClick={() => onClick(index)}
      />
      <Input
        spellCheck={false}
        onChange={(event) => setValue(event.target.value)}
        disabled={!isEdit}
        type="text"
        value={value}
      />
    </Grid>
  );
}

export default Option;
