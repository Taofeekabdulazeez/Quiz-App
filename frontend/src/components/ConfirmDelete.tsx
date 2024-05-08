import styled from "styled-components";
import ActionButton from "../ui/ActionButton";
import ButtonLoader from "../ui/ButtonLoader";

const Container = styled.div`
  width: 40rem;
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
`;

const Heading = styled.h3``;
const Message = styled.p`
  margin-bottom: 1.2rem;
`;
const Flex = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 1.2rem;
`;

type DeleteProps = {
  resourceName?: string;
  onConfirm: () => void;
  disabled?: boolean;
  onCloseModal?: () => void;
};

function ConfirmDelete({
  resourceName,
  onConfirm,
  disabled,
  onCloseModal,
}: DeleteProps) {
  return (
    <Container>
      <Heading>Delete {resourceName}</Heading>
      <Message>
        Are you sure you want to delete this {resourceName} permanently? This
        action cannot be undone.
      </Message>
      <Flex>
        <ActionButton onClick={onCloseModal}>Cancel</ActionButton>
        <ActionButton
          onClick={() => {
            onConfirm();
            if (disabled) onCloseModal?.();
          }}
          disabled={disabled}
          $type="delete"
        >
          {disabled ? <ButtonLoader /> : "Delete"}
        </ActionButton>
      </Flex>
    </Container>
  );
}

export default ConfirmDelete;
