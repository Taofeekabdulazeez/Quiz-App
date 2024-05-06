import { MdAdd } from "react-icons/md";
import styled from "styled-components";
import FormAddQ from "./FormAddQ";

const Container = styled.div`
  background-color: var(--bg-layer-1);
  padding: 1.6rem;
`;

const Button = styled.button`
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  border: 0;
  border-radius: 9px;
  background-color: var(--color-blue-900);
  padding: 0.6rem 1rem;
  color: var(--color-blue-100);
  /* font-weight: 600; */

  &:hover {
    background-color: var(--color-blue-1000);
    cursor: pointer;
  }
`;

function QuestionOverview() {
  return (
    <Container>
      <Button>
        <MdAdd size={20} />
        Add Question
      </Button>
      <FormAddQ />
    </Container>
  );
}

export default QuestionOverview;
