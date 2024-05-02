import express from "express";
import * as userController from "../controllers/userController";

const userRouter = express.Router();

userRouter.get("/", userController.getAllUsers);
userRouter.post("/", userController.createUser);

userRouter.get("/:id", userController.getUser);
userRouter.delete("/:id", userController.deleteUser);
userRouter.patch("/:id", userController.updateUser);

export default userRouter;
