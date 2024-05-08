import { MdAdd } from "react-icons/md";
import styled from "styled-components";
import Modal from "../../../components/Modal";

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
      <Modal>
        <Modal.Open opens="question-form">
          <Button>
            <MdAdd size={18} />
            Add new cabin
          </Button>
        </Modal.Open>
        <Modal.Window name="question-form">edit cabin</Modal.Window>
      </Modal>
    </Container>
  );
}

export default QuestionOverview;
