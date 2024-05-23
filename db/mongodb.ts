import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const dbURI = process.env.DATABASE_URI;
//   "mongodb+srv://sirfeeky:f0xOlSY8SDbrYBEX@cluster0.zlxo37a.mongodb.net/";

function connectToDb() {
  mongoose.connect(`${dbURI}`);

  mongoose.connection.on("connected", () => {
    console.log("connected to Database successfully!");
  });
  //
  mongoose.connection.on("error", (err) => {
    console.log(err);
  });
}

export default connectToDb;
