import styled from "styled-components";
import ActionButton from "../ui/ActionButton";
import { MdOutlineDelete, MdOutlineEdit } from "react-icons/md";
import { Question } from "../interfaces/interface";
import FormEdit from "./FormEdit";
import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { useQueryClient } from "@tanstack/react-query";

const ListItem = styled.li`
  display: flex;
  align-items: center;
  text-decoration: none;
  color: var(--color-gray-700);
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

const Number = styled.span``;

type Props = {
  question: Question;
  index: number;
};

function QuestionItem({ question, index }: Props) {
  const { question: q, _id } = question;
  const [showForm, setShowForm] = useState(false);

  return (
    <>
      <ListItem key={_id}>
        <Text>
          <Number>{index + 1}.</Number>{" "}
          {/* {q.length < 50 ? q : `${q.slice(0, 50)}...`} */}
          {q}
        </Text>
        <Flex>
          <ActionButton onClick={() => setShowForm((show) => !show)}>
            <MdOutlineEdit size={16} />
          </ActionButton>
          <ActionButton $color="var(--color-red-900)">
            <MdOutlineDelete size={16} />
          </ActionButton>
        </Flex>
      </ListItem>
      {showForm && <FormEdit data={question} />}
    </>
  );
}

export default QuestionItem;
