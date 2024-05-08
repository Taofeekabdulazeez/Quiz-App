import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./reducers/userReducer";
import quizReducer from "./reducers/quizReducer";
import { Provider } from "react-redux";
import { ReactNode } from "react";

const store = configureStore({
  reducer: {
    user: userReducer,
    quiz: quizReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

function QuizProvider({ children }: { children: ReactNode }) {
  return <Provider store={store}>{children}</Provider>;
}

export default QuizProvider;
