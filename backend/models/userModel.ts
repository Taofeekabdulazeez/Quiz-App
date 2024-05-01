import { Schema, model } from "mongoose";

const UserSchema = new Schema({
  _id: String,
  id: Number,
  name: String,
  age: Number,
});

const User = model("User", UserSchema);

export default User;
