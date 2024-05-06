import styled from "styled-components";
import QuestionList from "./QuestionList";
import QuestionOverview from "./QuestionOverview";

const Container = styled.div`
  display: grid;
  grid-template-columns: 1.5fr 1fr;
`;

function Questions() {
  return (
    <Container>
      <QuestionList />
      <QuestionOverview />;
    </Container>
  );
}

export default Questions;
