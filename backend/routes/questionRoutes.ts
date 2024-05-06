import { Router } from "express";
import * as questionController from "../controllers/questionController";

const questionRouter = Router();

questionRouter.post("/", questionController.createQuestion);
questionRouter.get("/", questionController.getAllQuestions);

export default questionRouter;
