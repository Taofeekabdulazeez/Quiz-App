import styled from "styled-components";
import ActionButton from "../ui/ActionButton";
import { MdOutlineDelete, MdOutlineEdit } from "react-icons/md";
import { useQuestions } from "../hooks/useQuestions";
import QuestionsLoader from "../ui/QuestionsLoader";

const List = styled.ul`
  max-width: 60rem;
  display: flex;
  flex-direction: column;
  padding: 1rem 2rem;
  list-style-type: none;
  gap: 1rem;
`;

const ListItem = styled.li`
  display: flex;
  align-items: center;
  /* gap: 6rem; */
  justify-content: space-between;
  border-bottom: 1px solid var(--color-gray-200);
`;

const Text = styled.p`
  /* font-weight: 500; */
  display: flex;
  gap: 0.6rem;
`;

const Flex = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const Heading = styled.h4`
  margin-left: 2rem;
  font-weight: 500;
  color: var(--color-gray-800);
`;

const Number = styled.span``;

function QuestionList() {
  const { isLoading, questions } = useQuestions();

  if (isLoading || !questions) return <QuestionsLoader />;

  return (
    <div>
      <Heading>Edit/Delete question</Heading>
      <List>
        {questions.map((question, index) => {
          const { question: q, _id } = question;
          return (
            <ListItem key={_id}>
              <Text>
                <Number>{index + 1}.</Number>{" "}
                {q.length < 50 ? q : `${q.slice(0, 50)}...`}
              </Text>
              <Flex>
                <ActionButton>
                  <MdOutlineEdit size={16} />
                </ActionButton>
                <ActionButton $color="var(--color-red-900)">
                  <MdOutlineDelete size={16} />
                </ActionButton>
              </Flex>
            </ListItem>
          );
        })}
      </List>
    </div>
  );
}

export default QuestionList;
