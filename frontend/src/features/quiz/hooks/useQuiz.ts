import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../store/QuizProvider";
// import type { AppDispatch, RootState } from "../../../redux/store";

export const useQuizDispatch = useDispatch.withTypes<AppDispatch>();
export const useQuizSelector = useSelector.withTypes<RootState>();
