import dotenv from "dotenv";
import mongoose from "mongoose";
import app from "./index";

//For env File
dotenv.config({ path: "./config.env" });

mongoose.connect(
  `mongodb+srv://sirfeeky:f0xOlSY8SDbrYBEX@cluster0.zlxo37a.mongodb.net/app`
);
// const port = process.env.PORT || 8000;
const port = 3000;

app.listen(port, () => {
  console.log(`App running on port ${port}`);
});
