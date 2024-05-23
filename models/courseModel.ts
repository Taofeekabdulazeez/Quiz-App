import { Schema } from "mongoose";

const CourseSchema = new Schema({
  title: String,
  questions: Array,
});
