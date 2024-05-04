import { Router } from "express";
import * as questionController from "../controllers/questionController";

const questionRouter = Router();

questionRouter.post("/", questionController.createQuestion);

export default questionRouter;
