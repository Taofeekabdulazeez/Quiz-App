import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { QuizState, Question } from "../interfaces/interface";

const SECS_PER_QUESTION = 30;
const initialState: QuizState = {
  questions: [],
  index: 0,
  answers: [],
  onSubmit: false,
  score: 0,
  time: null,
  status: "ready",
};

const quizSlice = createSlice({
  name: "quiz",
  initialState,
  reducers: {
    storeQuestions(state, action: PayloadAction<Question[]>) {
      state.questions = action.payload;
      state.answers = Array.from(
        { length: state.questions.length },
        () => null
      );
      state.time = SECS_PER_QUESTION * state.questions.length;
      // state.status = "start";
    },
    startQuiz(state) {
      state.status = "start";
    },
    nextQuestion(state) {
      if (state.index !== state.questions.length - 1) state.index++;
    },
    prevQuestion(state) {
      if (state.index !== 0) state.index--;
    },
    gotoQuestion(state, action: PayloadAction<number>) {
      state.index = action.payload - 1;
    },
    newAnwser(state, action: PayloadAction<number>) {
      state.answers[state.index] = action.payload;
      state.score = state.answers.filter(
        (answer, index) => answer === state.questions[index].correctOption
      ).length;
    },
    confirmSubmission(state) {
      state.onSubmit = true;
    },
    unConfirmSubmission(state) {
      state.onSubmit = false;
    },
    isSubmitting(state) {
      state.status = "submitting";
    },
    submit(state) {
      state.status = "finish";
    },
  },
});

export const {
  startQuiz,
  nextQuestion,
  storeQuestions,
  prevQuestion,
  gotoQuestion,
  newAnwser,
  confirmSubmission,
  unConfirmSubmission,
  isSubmitting,
  submit,
} = quizSlice.actions;

export default quizSlice.reducer;
