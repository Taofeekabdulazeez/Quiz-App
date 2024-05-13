import styled from "styled-components";
import { useQuizSelector } from "../hooks/useQuiz";

const P = styled.div`
  font-size: 1.2rem;
  font-weight: 600;
  text-transform: uppercase;
  margin-bottom: 2rem;
  text-align: center;
`;

function Answered() {
  // const { answered, questions } = useQuiz();
  const { questions } = useQuizSelector((state) => state.quiz);
  const answered = useQuizSelector(
    (state) => state.quiz.answers.filter((answer) => answer !== null).length
  );
  return (
    <P>
      {answered} of {questions.length} questions answered
    </P>
  );
}

export default Answered;
