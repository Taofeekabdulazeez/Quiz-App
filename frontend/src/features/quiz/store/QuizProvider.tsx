import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import { ReactNode } from "react";
import userReducer from "../reducers/userReducer";
import quizReducer from "../reducers/quizReducer";

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
