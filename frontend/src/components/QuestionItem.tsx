import styled from "styled-components";
import ActionButton from "../ui/ActionButton";
import { MdOutlineDelete, MdOutlineEdit } from "react-icons/md";
import { Question } from "../interfaces/interface";
import FormEdit from "./FormEdit";
import Modal from "../ui/Modal";
import DeletePopup from "./DeletePopup";
import { useDeleteQuestion } from "../hooks/useDeleteQuestion";
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
  const { isDeleting, deletQuestion } = useDeleteQuestion();

  return (
    <>
      <ListItem key={_id}>
        <Text>
          <Number>{index + 1}.</Number>{" "}
          {/* {q.length < 50 ? q : `${q.slice(0, 50)}...`} */}
          {q}
        </Text>
        <Modal>
          <Flex>
            <Modal.Open opens="form">
              <ActionButton>
                <MdOutlineEdit size={16} />
              </ActionButton>
            </Modal.Open>
            <Modal.Window name="form">
              <FormEdit data={question} />
            </Modal.Window>
            <Modal.Open opens="delete">
              <ActionButton $color="var(--color-red-900)">
                <MdOutlineDelete size={16} />
              </ActionButton>
            </Modal.Open>
            <Modal.Window name="delete">
              <DeletePopup
                onConfirm={() => deletQuestion(_id)}
                disabled={isDeleting}
                resourceName="Question"
              />
            </Modal.Window>
          </Flex>
        </Modal>
      </ListItem>
    </>
  );
}

export default QuestionItem;
