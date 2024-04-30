import dotenv from "dotenv";
import app from "./index";

//For env File
dotenv.config({ path: "./config.env" });

// const port = process.env.PORT || 8000;
const port = 3000;

app.listen(port, () => {
  console.log(`App running on port ${port}`);
});
