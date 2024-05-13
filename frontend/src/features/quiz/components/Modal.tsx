import styled, { css } from "styled-components";
import { useQuizDispatch, useQuizSelector } from "../hooks/useQuiz";
import { unConfirmSubmission } from "../reducers/quizReducer";
// import { unConfirmSubmission } from "../../../redux/reducers/quizReducer";

const StyledModal = styled.div`
  position: fixed;
  text-align: center;
  /* width: 60rem; */
  padding: 1.6rem;
  font-size: 8rem;
  z-index: 3;
  background-color: var(--color-bg-900);
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.12);
  border-radius: 9px;
`;

const Overlay = styled.div`
  position: fixed;
  /* width: 100%; */
  inset: 0;
  background-color: #000;
  opacity: 0.3;
  z-index: 2;
`;

const H3 = styled.h3`
  font-size: 1.8rem;
  font-weight: 600;
  margin-bottom: 3.2rem;
`;
const P = styled.p`
  font-size: 1.4rem;
  color: #555;
  font-weight: 500;
  line-height: 1.6;
  margin-bottom: 3.2rem;
`;

const BtnWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  /* gap: 8rem; */
`;
const Button = styled.div<{ $type?: string }>`
  border: 0;
  background: 0;
  font-size: 1.6rem;
  font-weight: 600;
  text-transform: uppercase;
  padding: 0.8rem 1rem;
  border-radius: 9px;
  background-color: var(--color-primary);
  color: #fff;
  cursor: pointer;

  ${(props) =>
    props.$type === "inverted" &&
    css`
      background-color: var(--color-bg-700);
      color: var(--color-text);
    `}
`;

function Modal() {
  // const { submitQuiz } = useSubmit();
  const { onSubmit } = useQuizSelector((state) => state.quiz);
  // const { name, email } = useQuizSelector((state) => state.user);
  const dispatch = useQuizDispatch();

  return (
    onSubmit && (
      <>
        <StyledModal>
          <H3>Are you sure you want to end the Exam?</H3>
          <P>You still have 23 seconds remaining</P>
          <P>
            If you want to check your answer again, press NO to cancel. if you
            want to end the exam and submit your answers you can press YES
          </P>
          <BtnWrapper>
            <Button
              onClick={() => {
                // submitQuiz({ name, email, score });
              }}
            >
              Yes
            </Button>
            <Button
              $type="inverted"
              onClick={() => dispatch(unConfirmSubmission())}
            >
              No
            </Button>
          </BtnWrapper>
        </StyledModal>
        <Overlay
          onClick={() => {
            dispatch(unConfirmSubmission());
          }}
        />
      </>
    )
  );
}

export default Modal;
