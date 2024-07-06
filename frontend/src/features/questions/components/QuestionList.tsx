import styled from "styled-components";
import { useQuestions } from "../hooks/useQuestions";
import QuestionsLoader from "./QuestionsLoader";
import QuestionItem from "./QuestionItem";
import ActionButton from "../../../ui/ActionButton";
import Modal from "../../../components/Modal";
import FormQuestion from "./FormQuestion";

const List = styled.ul`
  /* max-width: 60rem; */
  display: flex;
  flex-direction: column;
  padding: 1rem 2rem;
  list-style-type: none;
  gap: 1rem;
`;

const Heading = styled.h4`
  margin-right: 2rem;
  font-weight: 500;
  color: var(--color-gray-800);
  text-align: right;
`;

const Flex = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
`;

function QuestionList() {
  const { isLoading, questions } = useQuestions();
  console.log(questions);

  if (isLoading || !questions) return <QuestionsLoader />;

  return (
    <div>
      <Flex>
        <Modal>
          <Modal.Open opens="edit">
            <ActionButton $type="view">Add New Question</ActionButton>
          </Modal.Open>
          <Modal.Window name="edit">
            <FormQuestion />
          </Modal.Window>
        </Modal>
        <Heading>Edit/Delete question</Heading>
      </Flex>
      <List>
        {questions.map((question, index) => (
          <QuestionItem key={question._id} question={question} index={index} />
        ))}
      </List>
    </div>
  );
}

export default QuestionList;
