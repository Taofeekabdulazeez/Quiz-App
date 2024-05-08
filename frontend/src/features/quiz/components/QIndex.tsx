// import { useQuiz } from "../contexts/QuizContext";
import styled from "styled-components";
import { FaCheck } from "react-icons/fa";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import { gotoQuestion } from "../../../redux/reducers/quizReducer";
// import { useAppDispatch, useAppSelector } from "../hooks/hooks";
// import { gotoQuestion } from "../features/quizSlice";

const Button = styled.button`
  position: relative;
  background: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  /* background-color: var(--color-primary); */
  color: var(--color-primary);
  border: 0.15rem solid var(--color-primary);
  width: 2.8rem;
  height: 2.8rem;
  border-radius: 6px;
  font-weight: 600;
  font-size: 1.4rem;
  cursor: pointer;
  /* transition: all 0.3s; */

  & svg {
    display: none;
    position: absolute;
    top: 0;
    right: 0.1rem;
  }

  &.answered {
    /* background-color: var(--color-green); */
    /* color: #fff; */
    background-color: #bee0f5;
    color: #0672cb;
    /* border: 0.15rem solid var(--color-green); */
    svg {
      display: block;
    }
  }

  &.active {
    background-color: var(--color-primary);
    color: #fff;
    border: 0.15rem solid var(--color-primary);
  }
`;

interface QindexProps {
  qNumber: number;
}

function QIndex({ qNumber }: QindexProps) {
  // const { answers } = useQuiz();
  const { index, answers } = useAppSelector((state) => state.quiz);
  const dispatch = useAppDispatch();
  const hasAnswer = typeof answers[qNumber - 1] === "number";
  return (
    <Button
      className={`${index + 1 === qNumber ? "active" : ""} ${
        hasAnswer ? "answered" : ""
      }`}
      onClick={() => dispatch(gotoQuestion(qNumber))}
    >
      {false && <FaCheck size={8} />}
      {qNumber}
    </Button>
  );
}

export default QIndex;
