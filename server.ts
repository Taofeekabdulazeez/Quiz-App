import dotenv from "dotenv";
import app from "./index";
import dbConnect from "./db/mongodb";

//For env File
dotenv.config();

// Connect to Database
// dbConnect();

const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}`);
});
