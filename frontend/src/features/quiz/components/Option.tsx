import styled from "styled-components";
import CheckBox from "./CheckBox";
import { useQuizDispatch, useQuizSelector } from "../hooks/useQuiz";
import { newAnwser } from "../reducers/quizReducer";
// import { newAnwser } from "../../../redux/reducers/quizReducer";

const StyledOption = styled.li`
  display: flex;
  gap: 1rem;
  align-items: center;
  padding: 1rem 2rem;
  background-color: var(--color-bg-900);
  border-radius: 9px;
  cursor: pointer;
`;

const Span = styled.span`
  font-size: 1.6rem;
  font-weight: 500;
  color: var(--color-text);
  line-height: 1.4;
`;

interface OptionProps {
  children: string;
  optIndex: number;
}

function Option({ children, optIndex }: OptionProps) {
  const { answers, index } = useQuizSelector((state) => state.quiz);
  const dispatch = useQuizDispatch();
  return (
    <StyledOption onClick={() => dispatch(newAnwser(optIndex))}>
      <CheckBox isChecked={answers[index] === optIndex} />
      <Span>{children}</Span>
    </StyledOption>
  );
}

export default Option;
