import ActionButton from "../ui/ActionButton";
import styled from "styled-components";
import { ChangeEvent, useState } from "react";
import Option from "./Option";
import ButtonLoader from "../ui/ButtonLoader";

const Form = styled.form`
  margin-top: 3rem;
  background-color: var(--bg-layer-1);
  padding: 1.2rem;
  border-radius: 9px;
`;

const FlexCol = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-bottom: 2rem;
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
  width: 100%;

  &:focus-visible {
    border: 0.2rem solid var(--color-blue-800);
  }

  &:disabled {
    cursor: not-allowed;
  }
`;

const FlexRol = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

type FormProps = {
  data: {
    question: string;
    options: string[];
    correctOption: number;
  };
};

function FormEdit({ data }: FormProps) {
  const { options, question, correctOption } = data;
  const [isEdit, setIsEdit] = useState(true);
  const [newQuestion, setNewQuestion] = useState(question);
  const [answer, setAnswer] = useState(correctOption);

  const handleAnswer = (index: number) => setAnswer(() => index);
  const handleQuestion = (event: ChangeEvent<HTMLTextAreaElement>) =>
    setNewQuestion(event.target.value);

  return (
    <Form onSubmit={(event) => event.preventDefault()}>
      <H4>Question</H4>
      <Grid>
        <span>1.</span>
        <TextArea
          disabled={!isEdit}
          spellCheck={false}
          value={newQuestion}
          onChange={handleQuestion}
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
              answer={answer as number}
              onClick={handleAnswer}
            ></Option>
          ))}
        </FlexCol>
        <FlexRol>
          <ActionButton
            $type="edit"
            onClick={() => {
              setAnswer(correctOption);
              setNewQuestion(question);
              setIsEdit((edit) => !edit);
            }}
          >
            {isEdit ? "cancel" : "Edit"}
          </ActionButton>
          {isEdit && (
            <ActionButton $type="view">
              Save {false && <ButtonLoader />}
            </ActionButton>
          )}
        </FlexRol>
      </div>
    </Form>
  );
}

export default FormEdit;
