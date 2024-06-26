import AppLayout from "../../features/quiz/components/AppLayout";
import FinishScreen from "../../features/quiz/components/FinishScreen";
import Loader from "../../features/quiz/components/Loader";
import Main from "../../features/quiz/components/Main";
import StartScreen from "../../features/quiz/components/StartScreen";
import { useQuizSelector } from "../../features/quiz/hooks/useQuiz";

function QuizApp() {
  const status = useQuizSelector((state) => state.quiz.status);

  return (
    <AppLayout>
      {status === "ready" && <StartScreen />}
      {status === "start" && <Main />}
      {status === "submitting" && <Loader message="Submitting.." />}
      {status === "finish" && <FinishScreen />}
    </AppLayout>
  );
}

export default QuizApp;
