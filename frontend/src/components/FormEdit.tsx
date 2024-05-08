import ActionButton from "../ui/ActionButton";
import styled from "styled-components";
import { ChangeEvent, FormEvent, useState } from "react";
import Option from "./Option";
import ButtonLoader from "../ui/ButtonLoader";
import { useEditQuestion } from "../hooks/useEditQuestion";
import { useQueryClient } from "@tanstack/react-query";

const Form = styled.form`
  width: 50rem;
  background-color: var(--bg-layer-1);
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
  margin-bottom: 1rem;
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
  margin-bottom: 2rem;

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
    _id: string;
    question: string;
    options: string[];
    correctOption: number;
  };
  onCloseModal?: () => void;
};

function FormEdit({ data, onCloseModal }: FormProps) {
  const { options, question, correctOption, _id } = data;
  // const [isEdit, setIsEdit] = useState(true);
  const [newQuestion, setNewQuestion] = useState(question);
  const [answer, setAnswer] = useState(correctOption);
  const { isEditing, editQuestion } = useEditQuestion();

  const handleAnswer = (index: number) => setAnswer(() => index);
  const handleQuestion = (event: ChangeEvent<HTMLTextAreaElement>) =>
    setNewQuestion(event.target.value);

  const queryClient = useQueryClient();

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    editQuestion({
      id: _id,
      data: {
        question: newQuestion,
        options,
        correctOption: answer,
      },
    });
    queryClient.invalidateQueries({ queryKey: ["questions"] });
  };
  return (
    <Form onSubmit={handleSubmit}>
      <H4>Question</H4>
      <Grid>
        <span></span>
        <TextArea
          disabled={isEditing}
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
              isEditing={isEditing}
              index={index}
              answer={answer as number}
              onClick={handleAnswer}
            ></Option>
          ))}
        </FlexCol>
        <FlexRol>
          <ActionButton
            type="reset"
            $type="edit"
            onClick={() => {
              onCloseModal?.();
            }}
          >
            Cancel
          </ActionButton>
          <ActionButton $type="view" onClick={() => {}}>
            {isEditing ? <ButtonLoader /> : "save"}
          </ActionButton>
        </FlexRol>
      </div>
    </Form>
  );
}

export default FormEdit;
