import { Schema, model } from "mongoose";

const UserSchema = new Schema(
  {
    name: String,
    age: Number,
  },
  { versionKey: false }
);

const User = model("User", UserSchema);

export default User;
