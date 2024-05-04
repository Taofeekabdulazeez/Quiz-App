import { Schema, model } from "mongoose";

const ResultSchema = new Schema({
  student_id: String,
  course: String,
  startTime: Date,
  endTime: Date,
  score: Number,
  pass: Boolean,
  total: Number,
  status: String,
});

const Result = model("Result", ResultSchema);

export default Result;
