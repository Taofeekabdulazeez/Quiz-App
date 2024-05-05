import { Schema, model } from "mongoose";

export const QuestionSchema = new Schema(
  {
    question: String,
    options: Array,
    correctOption: Number,
  },
  { versionKey: false }
);

const Question = model("Question", QuestionSchema);

export default Question;
