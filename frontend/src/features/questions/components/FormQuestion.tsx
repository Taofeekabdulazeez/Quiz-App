import ActionButton from "../../../ui/ActionButton";
import styled from "styled-components";
import ButtonLoader from "../../../ui/ButtonLoader";
import { useFieldArray, useForm } from "react-hook-form";
import CheckBox from "./CheckBox";
import { MdClose } from "react-icons/md";
import { useState } from "react";
import { useEditQuestion } from "../hooks/useEditQuestion";
import { useUploadQuestion } from "../hooks/useUploadQuestion";

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
  grid-template-columns: auto 1fr auto;
  gap: 2rem;
  align-items: center;
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

  &:focus-visible,
  &:focus {
    border: 0.2rem solid var(--color-blue-800);
  }

  &:disabled {
    cursor: not-allowed;
  }
`;

const CenterFlex = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

type FormData = {
  question: string;
  options: { option: string }[];
  correctOption: number;
};

type FormProps = {
  data?: {
    _id: string;
    question: string;
    options: string[];
    correctOption: number;
  };
  onCloseModal?: () => void;
};

const editData = {
  question: "",
  options: [],
  correctOption: 0,
  _id: "",
};

function FormQuestion({ data = editData, onCloseModal }: FormProps) {
  const isEditSession = data.question !== "";
  console.log(isEditSession);

  const { options, question, correctOption, _id: id } = data;
  const [newAnswer, setNewAnswer] = useState(correctOption);
  const { isUploading, uploadQuestion } = useUploadQuestion();
  const { isEditing, editQuestion } = useEditQuestion();

  const defaultValues: FormData = {
    question,
    correctOption,
    options: options.map((opt) => ({ option: opt })),
  };

  const { register, handleSubmit, control, reset } = useForm<FormData>({
    defaultValues,
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: "options",
  });

  const onSubmit = (data: FormData) => {
    const { question, options } = data;
    const newData = {
      question,
      correctOption: newAnswer,
      options: options.map((opt) => opt.option),
    };
    console.log(isEditSession);

    if (isEditSession)
      editQuestion(
        {
          id,
          data: newData,
        },
        { onSuccess: () => onCloseModal?.() }
      );
    else uploadQuestion(newData, { onSuccess: () => onCloseModal?.() });
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <H4>Question</H4>
      <TextArea spellCheck={false} {...register("question")}></TextArea>
      <H4>Options</H4>
      <FlexCol>
        {fields.map((field, index) => (
          <Grid key={field.id}>
            <CheckBox
              isChecked={index === newAnswer}
              onClick={() => setNewAnswer(index)}
            />
            <Input
              type="text"
              key={field.id} // important to include key with field's id
              {...register(`options.${index}.option` as const)}
              disabled={isEditing || isUploading}
            />
            <ActionButton
              type="button"
              disabled={isEditing || isUploading}
              onClick={() => remove(index)}
            >
              <MdClose />
            </ActionButton>
          </Grid>
        ))}
      </FlexCol>
      <CenterFlex>
        <ActionButton
          type="button"
          disabled={isEditing || isUploading}
          $backgroundColor="var(--color-gray-100)"
          $fontSize="1.2rem"
          onClick={() => append({ option: "" })}
        >
          Add Option
        </ActionButton>
      </CenterFlex>
      <FlexRol>
        <ActionButton
          disabled={isEditing || isUploading}
          type="button"
          $type="edit"
          onClick={() => {
            reset();
            onCloseModal?.();
          }}
        >
          Cancel
        </ActionButton>
        <ActionButton
          type="submit"
          $type="view"
          disabled={isEditing || isUploading}
        >
          {isEditing ? (
            <>
              <span>Saving</span>
              <ButtonLoader />
            </>
          ) : (
            isEditSession && "Save"
          )}
          {isUploading ? (
            <>
              <span>Uploading</span>
              <ButtonLoader />
            </>
          ) : (
            !isEditSession && "Add"
          )}
        </ActionButton>
      </FlexRol>
    </Form>
  );
}

export default FormQuestion;
