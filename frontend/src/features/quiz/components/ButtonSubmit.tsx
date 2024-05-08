import styled from "styled-components";
import { confirmSubmission } from "../../../redux/reducers/quizReducer";
import { useAppDispatch } from "../../../redux/hooks";
// import { useAppDispatch } from "../hooks/hooks";
// import { confirmSubmission } from "../features/quizSlice";

export const Button = styled.button<{ $type?: string }>`
  text-align: center;
  display: block;
  margin: 0 auto;
  background: none;
  border: 0;
  padding: 0.6rem 6rem;
  font-size: 1.4rem;
  font-weight: 600;
  border: 0.2rem solid var(--color-primary);
  background-color: var(--color-primary);
  color: #fff;
  border-radius: 9px;
  cursor: pointer;
`;

function ButtonSubmit() {
  const dispatch = useAppDispatch();
  return (
    <Button
      onClick={() => {
        dispatch(confirmSubmission());
      }}
    >
      SUBMIT
    </Button>
  );
}

export default ButtonSubmit;
