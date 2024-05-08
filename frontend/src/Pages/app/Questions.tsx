import styled from "styled-components";
import QuestionList from "../../features/questions/components/QuestionList";
import QuestionOverview from "../../features/questions/components/QuestionOverview";

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr;
`;

function Questions() {
  return (
    <Container>
      <QuestionList />
      {false && <QuestionOverview />}
    </Container>
  );
}

export default Questions;
