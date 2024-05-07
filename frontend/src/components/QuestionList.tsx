import styled from "styled-components";
import { useQuestions } from "../hooks/useQuestions";
import QuestionsLoader from "../ui/QuestionsLoader";
import QuestionItem from "./QuestionItem";

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

function QuestionList() {
  const { isLoading, questions } = useQuestions();

  if (isLoading || !questions) return <QuestionsLoader />;

  return (
    <div>
      <Heading>Edit/Delete question</Heading>
      <List>
        {questions.map((question, index) => (
          <QuestionItem key={question._id} question={question} index={index} />
        ))}
      </List>
    </div>
  );
}

export default QuestionList;
