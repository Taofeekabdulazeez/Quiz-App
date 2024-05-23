import express, { Express, Request, Response, Application } from "express";
import cors from "cors";
import userRouter from "./routes/userRoutes";
import questionRouter from "./routes/questionRoutes";
import resultRouter from "./routes/resultRoutes";
import { requiresAuth } from "express-openid-connect";
import auth0 from "./auth/auth0";

const app: Application = express();

app.use(express.json());
app.use(cors());
app.use(express.static(`backend`));

app.set("views", "views");
app.set("view engine", "ejs");

app.use(auth0);

// TESTING:
app.get("/", (req, res) => {
  res.render("index", {
    user: req.oidc.user,
  });
});

app.get("/profile", requiresAuth(), (req, res) => {
  console.log(req.oidc.user);
  res.render("profile", {
    user: req.oidc.user,
  });
});

app.use("/api/users", userRouter);
app.use("/api/questions", requiresAuth(), questionRouter);
app.use("/api/results", requiresAuth(), resultRouter);

app.all("*", (request, response, next) => {
  response.send("cannot find route");
});

export default app;
