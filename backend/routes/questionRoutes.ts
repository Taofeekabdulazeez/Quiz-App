import { Router } from "express";
import * as questionController from "../controllers/questionController";

const questionRouter = Router();

questionRouter.post("/", questionController.createQuestion);
questionRouter.get("/", questionController.getAllQuestions);
questionRouter.get("/:id", questionController.getQuestion);

export default questionRouter;
