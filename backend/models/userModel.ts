import { Schema, model } from "mongoose";

const UserSchema = new Schema(
  {
    name: String,
    course: String,
    age: Number,
    status: String,
    startTime: Date,
    endTime: Date,
    score: Number,
    pass: Boolean,
  },
  { versionKey: false }
);

const User = model("User", UserSchema);

export default User;
