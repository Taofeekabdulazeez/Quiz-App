import express, { Express, Request, Response, Application } from "express";
import cors from "cors";
import userRouter from "./routes/userRoutes";
import questionRouter from "./routes/questionRoutes";

const app: Application = express();

app.use(express.json());
app.use(cors());
app.use(express.static(`backend`));

app.use("/api/users", userRouter);
app.use("/api/questions", questionRouter);

app.all("*", (request, response, next) => {
  response.send("cannot find route");
});

export default app;
