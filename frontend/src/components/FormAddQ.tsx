import { useState } from "react";
import styled from "styled-components";
import Option from "./Option";

const Form = styled.form`
  margin-top: 3rem;
`;

const FlexCol = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const H4 = styled.h4`
  font-weight: 500;
  margin-top: 2rem;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 1rem;
`;

const TextArea = styled.textarea`
  background-color: var(--bg-base);
  border: 0;
  color: var(--color-gray-700);
  font-family: inherit;
  padding: 0.6rem;
  border: 0.2rem solid transparent;
  outline: 0;
  border-radius: 6px;

  &:focus-visible {
    border: 0.2rem solid var(--color-blue-800);
  }

  &:disabled {
    cursor: not-allowed;
  }
`;

const options = ["Encalpsulation", "Inheritance", "Class", "Polymorphism"];

function FormAddQ() {
  const defaultAnswer = 2;
  const [isEdit, setIsEdit] = useState(true);
  const [answer, setAnswer] = useState(defaultAnswer);

  const handleAnswer = (index: number) => setAnswer(() => index);
  return (
    <Form onSubmit={(event) => event.preventDefault()}>
      <H4>Question</H4>
      <Grid>
        <span>1.</span>
        <TextArea
          disabled={!isEdit}
          spellCheck={false}
          value=" Which of the following is not a core principle of OOP?"
        ></TextArea>
      </Grid>
      <div>
        <FlexCol>
          <H4>Options</H4>
          {options.map((option, index) => (
            <Option
              key={index}
              option={option}
              isEdit={isEdit}
              index={index}
              answer={answer}
              onClick={handleAnswer}
            ></Option>
          ))}
        </FlexCol>
        <button
          onClick={() => {
            setIsEdit((edit) => !edit), setAnswer(defaultAnswer);
          }}
        >
          {isEdit ? "cancel" : "Edit"}
        </button>
      </div>
    </Form>
  );
}

export default FormAddQ;
