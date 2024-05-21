import { Router } from "express";
import * as resultController from "../controllers/resultController";

const resultRouter = Router();

resultRouter.post("/", resultController.saveResult);

export default resultRouter;
