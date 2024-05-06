import styled from "styled-components";
import QuestionList from "./QuestionList";
import Question from "./Question";

const Container = styled.div`
  display: grid;
  grid-template-columns: 1.5fr 1fr;
`;

function Questions() {
  return (
    <Container>
      <QuestionList />
      <Question />;
    </Container>
  );
}

export default Questions;
