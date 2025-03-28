import dotenv from "dotenv";
import mongoose from "mongoose";
import app from "./index";

//For env File
dotenv.config({ path: "./config.env" });

// `mongodb+srv://sirfeeky:f0xOlSY8SDbrYBEX@cluster0.zlxo37a.mongodb.net/app`
try {
  mongoose.connect("mongodb://host.docker.internal:27017/quiz-app");
  console.log("Connected to MongoDB");
} catch (err) {
  console.log("Failed to connect to MongoDB");
}
// const port = process.env.PORT || 8000;
const port = 3000;

app.listen(port, () => {
  console.log(`App running on port ${port}`);
});
