import styled from "styled-components";

import Loader from "./Loader";
import Modal from "./Modal";
import QuestionScreen from "./QuestionScreen";
import QuestionsNav from "./QuestionsNav";
import Time from "./Time";
import Answered from "./Answered";
import ButtonSubmit from "./ButtonSubmit";
import Aside from "./Aside";
import UserGuide from "./UserGuide";
import { useQuestions } from "../../questions/hooks/useQuestions";
import { storeQuestions } from "../../../redux/reducers/quizReducer";
import { useAppDispatch } from "../../../redux/hooks";
// import { useQuestions } from "../hooks/useQuestions";

const MainLayout = styled.main`
  display: grid;
  padding: 1.2rem;
  grid-template-columns: 1fr 0.3fr;
  @media (max-width: 35em) {
    grid-template-columns: 1fr;
  }
  margin: 0 auto;
  position: relative;
  gap: 1.6rem;
  background-color: var(--color-bg-900);
  height: 100dvh;
`;

function Main() {
  const { isLoading, questions } = useQuestions();
  const dispatch = useAppDispatch();
  if (questions) dispatch(storeQuestions(questions));

  if (isLoading) return <Loader message="Loading Questions..." />;

  return (
    <MainLayout>
      <Modal />
      <div>
        <QuestionScreen />
        <QuestionsNav />
      </div>
      <Aside>
        <Time />
        <Answered />
        <ButtonSubmit />
        <UserGuide />
      </Aside>
    </MainLayout>
  );
}

export default Main;
