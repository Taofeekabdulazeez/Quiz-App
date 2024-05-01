import express from "express";
import * as userController from "../controllers/userController";

const userRouter = express.Router();

userRouter.get("/", userController.getAllUsers);
userRouter.get("/:id", userController.getUser);
// userRouter.delete("/:id", userController.deleteUser);

export default userRouter;
