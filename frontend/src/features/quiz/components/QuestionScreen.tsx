import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Header from "./Header";
import Question from "./Question";
import Timer from "./Timer";
import styled from "styled-components";
import { Button } from "./Button";
import { useQuizDispatch } from "../hooks/useQuiz";
import { nextQuestion, prevQuestion } from "../reducers/quizReducer";

const Screen = styled.div`
  /* max-width: 80rem; */
  /* width: 100%; */
  /* margin: 0 auto; */
  background-color: var(--color-bg-700);
  padding: 1rem 1.6rem;
  position: relative;

  @media (max-width: 40em) {
    height: 100dvh;
  }
`;

const ButtonWrap = styled.div`
  position: absolute;
  right: 1rem;
  bottom: 1rem;
  display: flex;
  gap: 1.2rem;
  @media (max-width: 40em) {
    left: 50%;
    bottom: 10%;
    transform: translate(-50%, -50%);
  }
`;

const Title = styled.h1`
  font-size: 2rem;
  font-weight: 600;
  margin-bottom: 4rem;
`;

function QuestionScreen() {
  const dispatch = useQuizDispatch();
  return (
    <Screen>
      <Header>
        <Title>GNS112 CA</Title>
        {false && <Timer />}
      </Header>
      <Question />
      <ButtonWrap>
        <Button
          onClick={() => {
            dispatch(prevQuestion());
          }}
        >
          <FaArrowLeft /> Previous
        </Button>
        <Button
          onClick={() => {
            dispatch(nextQuestion());
          }}
        >
          Next <FaArrowRight />
        </Button>
      </ButtonWrap>
    </Screen>
  );
}

export default QuestionScreen;
